import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider domain="dev-orlkveuing736slm.us.auth0.com"
  clientId="4gZDAZNpcU9pBsumwnMhbWZnbG9TeEw9"
  redirectUri = {window.location.origin} >
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  </Auth0Provider>
  
)
