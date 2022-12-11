import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App"
import "./index.css"
import '@fontsource/work-sans/600.css'
import { ContextProvider } from './contexts/ContextProvider'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/theme/ChakraTheme'


ReactDOM.render(
    <ChakraProvider theme={theme}>
        <ContextProvider>
            <App />
        </ContextProvider> 
    </ChakraProvider>, document.getElementById('root')
)