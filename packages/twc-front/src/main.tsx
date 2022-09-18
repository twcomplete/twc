import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
