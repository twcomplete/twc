import React, { useCallback, useState, useEffect, MouseEvent } from 'react';

const Signup = () => {
    return (
        <div
            id="SignupModal"
            aria-hidden="true"
            className="hidden w-full h-full backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full bg-[rgba(0,0,0,0.3)]"
        >
            <div className="relative z-50 flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full flex flex-col justify-center p-6 m-auto bg-white rounded-md shadow-md max-w-2xl sm:max-w-xl sm:text-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700">Ooo</h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Enter your email"
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-indigo-600 hover:underline"
                            onClick={() => alert('비밀번호 찾기')}
                        >
                            <span>중복 체크하기</span>
                        </a>
                        <div className="mb-2 mt-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-2 mt-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                                name
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-2 mt-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                                phone
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Enter your phone"
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                                type="submit"
                                onClick={() => alert('가입')}
                            >
                                Sing up
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {' '}
                        이미 아이디가 있으신가요?{' '}
                        <a
                            href="#"
                            className="font-medium text-indigo-600 hover:underline"
                            onClick={() => {
                                document.getElementById('loginModal')?.classList.remove('hidden');
                                document.getElementById('SignupModal')?.classList.add('hidden');
                            }}
                        >
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Signup;
