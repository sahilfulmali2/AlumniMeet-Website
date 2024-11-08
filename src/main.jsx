import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Donation from './components/Donation-Section';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Donation/>
  </React.StrictMode>,
);