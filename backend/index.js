const express = require("express")
const app = express()
const helmet = require("helmet")

// socket.io server 
// socket.io pour communication bidirectionnelle client-server
const { Server } = require("socket.io")

const server = require("http").createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", 
        credentials: "true"
    }
})

// middleware
// helps secure app
app.use(helmet())
// accept JSON like object
app.use(express.json())

app.get('/', (req,res) => {
    res.json('hi')
})

io.on("connect", socket => {})

server.listen(4000, () => {
    console.log('Server listen on port 4000')
})