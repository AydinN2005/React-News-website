import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const btn  = document.getElementById("react-burger-menu-btn");
btn.style.width = "5%";
btn.style.height = "10%";
btn.hover()
