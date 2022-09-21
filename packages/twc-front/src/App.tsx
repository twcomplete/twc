import { useEffect, useState } from 'react';
import './style/App.css';
import './style/index.css';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import Layout from './components/Layout/Layout';
import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';

const App = () => {
    return (
        <div className="App">
            <Layout />
        </div>
    );
};
export default App;
