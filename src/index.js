import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './Store';
import './style.css';

ReactDOM.render(
    <App store={STORE} />, 
    document.getElementById('root')
);
