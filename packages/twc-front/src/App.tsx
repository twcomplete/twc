import { useEffect, useState } from 'react';
import './style/App.css';
import './style/index.css';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import Layout from './components/Layout/Layout';
import react from 'react';
import axios from 'axios';

const App = () => {
    const data = {
        id: 'hana',
        pwd: '21color',
    };
    const fetchUser = async () => {
        axios.post('http://localhost:3000', data).then((res) => {
            console.log(res);
        });
    };
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="App">
            <Layout />
        </div>
    );
};

export default App;
