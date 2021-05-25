import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/testSPA">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
