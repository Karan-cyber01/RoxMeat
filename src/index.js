import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import AppStoreContextProvider from './context/createcontext';
import AppFilterContextProvider from './context/filterdatacontext';
import AppClientContextProvider from './context/clientcontext';


ReactDOM.render(
  <React.StrictMode>
    <AppStoreContextProvider>
     <AppFilterContextProvider>
        <AppClientContextProvider>
        <App />
        </AppClientContextProvider>
      </AppFilterContextProvider>
      </AppStoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
