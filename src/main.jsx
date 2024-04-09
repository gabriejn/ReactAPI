import('dotenv').config

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Fetch from './Fetch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fetch />
  </React.StrictMode>,
)
