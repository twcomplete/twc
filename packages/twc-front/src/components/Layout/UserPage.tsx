import axios from 'axios';
import React from 'react';
import Dday from './Dday';
import Login from './Login';
import Signup from './Signup';
import TwcCal from './TwcCal';
import { useEffect, useState } from 'react';

const title = {
    title: 'Ooo',
};

const UserPage = () => {
    const workOutProverbs = [
        '오늘은 운동을 하지 않았다. 살 이유가 없다.',
        '운동하지 않는 자 먹지도 말라',
        '맛있으면 0kcal? 그건 핑계다. 모든 건 질량과 열량이 존재한다.',
        '운동은 먹는 것보다 더 중요하다.',
        '몸을 만들고 싶으면 말로 떠들지 말고 30분이라도 운동하라.',
        '움직이지 않으면 0kcal, 움직이면 1kcal',
    ];

    const workOutProverb = workOutProverbs[Math.floor(Math.random() * workOutProverbs.length)];

    return (
        <>
            <Signup />
            <Login />
            <section
                className="flex flex-col justify-center items-center
    w-full h-full"
            >
                <div className="max-w-[90%] flex flex-col justify-center items-center text-center ">
                    <h1 className="text-4xl font-bold text-white opacity-40">"{workOutProverb}"</h1>
                </div>
                <div className="p-6">
                    <h1 className="mb-3 font-bold text-9xl text-white">{title.title}</h1>
                    <Dday name=""></Dday>
                </div>
                <TwcCal></TwcCal>
            </section>
        </>
    );
};
export default UserPage;
