import Header from './Header';
import React from 'react';
import Footer from './Footer';
import UserPage from './UserPage';
import Login from './Login';
import Signup from './Signup';
import { useReducer, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import axios from 'axios';

function Layout() {
    return (
        <div className="flex flex-col from-indigo-100 via-indigo-300 to-indigo-500 bg-gradient-to-b h-screen">
            <Signup />
            <Login />
            <Header />
            <UserPage />
            <Footer />
        </div>
    );
}

export default Layout;
