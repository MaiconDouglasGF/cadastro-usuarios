import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'styled-components';
import App from './App.jsx';
import { GlobalStyles } from './GlobalStyles.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
)
