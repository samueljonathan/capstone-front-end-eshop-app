import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
//import reportWebVitals from './reportWebVitals';
import Product from './components/product';
import Order from './components/createOrder';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<Order/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals