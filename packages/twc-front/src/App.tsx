import { useEffect, useState, useRef } from 'react';
import './style/App.css';
import './style/index.css';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import Layout from './components/Layout/Layout';
import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useCallback } from 'preact/hooks';
import { conformsTo } from 'lodash';
import Signup from './components/Layout/Signup';
import Login from './components/Layout/Login';

const App = () => {
    return (
        <div className="App max-w-7xl m-auto">
            <Router>
                <Routes>
                    <Route path="/home" element={<Layout />} />
                </Routes>
            </Router>
        </div>
    );
};
export default App;
