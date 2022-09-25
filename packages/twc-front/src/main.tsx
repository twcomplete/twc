import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
