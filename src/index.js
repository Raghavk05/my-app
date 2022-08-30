import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider} from '@chakra-ui/react';
import customTheme from './extendTheme';
import '@fontsource/oswald/300.css'
import '@fontsource/oswald/500.css'
import { ColorModeScript } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme = {customTheme}>
    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


