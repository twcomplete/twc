import Header from './Header';
import React from 'react';
import Footer from './Footer';
import UserPage from './UserPage';
import Login from './Login';
import Signup from './Signup';


function Layout() {
    return (
        <div className="flex flex-col from-indigo-100 via-indigo-300 to-indigo-500 bg-gradient-to-b h-screen">
            <Header />
            <UserPage />
            <Footer />
        </div>
    );
}

export default Layout;
