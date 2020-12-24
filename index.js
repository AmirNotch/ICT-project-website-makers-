import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { SnackbarProvider } from 'notistack'

// css files
import './css/bootstrap.min.css'
import './fontawesome/css/all.min.css'
import './css/top-main.css'
import './css/header.css'
import './css/main.css'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
serviceWorker.unregister()
