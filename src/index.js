import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {add,mul,sub,div} from './Cal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>This is a simple calculator</h1>
    <ol>
      <li>sum of the two numbers {add(42,2)}</li>
      <li>Mul of the two numbers {mul(4,2)}</li>
      <li>Sub of the two numbers {sub(42,2)}</li>
      <li>Div of the two numbers {div(72,2)}</li>
      
    </ol>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
