import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import  theme  from "./Components/theme/";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <ThemeProvider theme = {theme}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  </ThemeProvider>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();



