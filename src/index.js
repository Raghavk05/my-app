import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider} from '@chakra-ui/react';
import customTheme from './extendTheme';
import '@fontsource/oswald/300.css'
import '@fontsource/oswald/500.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme = {customTheme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


