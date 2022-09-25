import React, { useRef, useCallback, useState, useEffect, MouseEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginInput } from '@twc/twc-models';

import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';

const Login = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const user = {
        id,
        pwd,
    };
    const handleLogin = async (e: any) => {
        e.preventDefault();
        await axios
            .post('/api/auth', user)
            .then((res) => {
                console.log(res);
                const { data } = res.data;
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                window.location.reload();
            })
            .catch((err) => {
                console.log(`err : ${err}`);
            });
    };

    return (
        <div
            id="loginModal"
            aria-hidden="true"
            className="w-full h-full backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full bg-[rgba(0,0,0,0.3)]"
        >
            <div className="relative z-50 flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full flex flex-col justify-center p-6 m-auto bg-white rounded-md shadow-md max-w-2xl sm:max-w-xl sm:text-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700">Ooo</h1>
                    <form className="mt-6" onSubmit={handleLogin}>
                        <div className="mb-2">
                            <label htmlFor="id" className="block text-sm font-semibold text-gray-800">
                                id
                            </label>
                            <input
                                onChange={(e) => {
                                    setId(e.target.value);
                                    console.log(e.target.value);
                                }}
                                type="text"
                                id="id"
                                value={id}
                                autoComplete="off"
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                onChange={(e) => {
                                    setPwd(e.target.value);
                                    console.log(e.target.value);
                                }}
                                type="password"
                                id="password"
                                value={pwd}
                                autoComplete="off"
                                required
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Enter your password"
                            />
                        </div>
                        <a href="#" className="text-xs text-indigo-600 hover:underline" onClick={() => alert('바보')}>
                            <span className="">비밀번호 생각이 안나요?</span>
                        </a>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {' '}
                        Don't have an account?{' '}
                        <a
                            href="#"
                            onClick={(e) => {
                                document.getElementById('loginModal')?.classList.add('hidden');
                                document.getElementById('SignupModal')?.classList.remove('hidden');
                            }}
                            className="font-medium text-indigo-600 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login;
