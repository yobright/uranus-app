import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App"
import "./index.css"

import { ContextProvider } from './contexts/ContextProvider'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
    <ChakraProvider>
        <ContextProvider>
            <App />
        </ContextProvider> 
    </ChakraProvider>, document.getElementById('root')
)