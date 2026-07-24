import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
// import './i18n'   // if you added i18n

// GitHub Pages redirect handling
const urlParams = new URLSearchParams(window.location.search);
const path = urlParams.get('path');
if (path) {
  window.history.replaceState(null, '', path);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)