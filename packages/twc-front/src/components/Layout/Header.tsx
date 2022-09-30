import { Fragment, useEffect } from 'react';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import React from 'react';
import logo from '../../img/Ooo.svg';
import axios from 'axios';

const loginuser = async () => {
    axios({
        method: 'post',
        url: 'http://localhost:3000/auth',
        data: {
            id: 'hana',
            pwd: '21color',
        },
    }).then((response) => {
        console.log(response);
    });
};
loginuser();

const Header = () => {
    const today = new Date();
    return (
        <header className="flex justify-evenly items-center text-white max-w-3xl m-auto px-0 py-8">
            <div className="rounded-full p-2.5 bg-white max-w-[6rem] text-indigo-400 shadow-lg shadow-indigo-300/50 mr-3">
                <img src={logo} className="max-w-full" />
            </div>
            <div className="rounded-full p-6 bg-white shadow-lg shadow-indigo-300/50 text-indigo-400 px-10 text-3xl">
                <span className="">
                    {today.getFullYear()}년 {today.getMonth()}월 {today.getDate()}일
                </span>
            </div>
            <button
                id="check_attned"
                onClick={() => alert('출석')}
                className="rounded-full p-6 bg-white shadow-lg shadow-indigo-300/50 text-indigo-400 px-10 ml-3 text-2xl"
            >
                출석체크
            </button>
        </header>
    );
};
export default Header;
