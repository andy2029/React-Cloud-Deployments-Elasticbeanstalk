import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initSpecials } from "./data/repository";
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialise local storage data.
initSpecials();

document.title = 'SOIL';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
