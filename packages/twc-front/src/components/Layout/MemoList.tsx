import { listenBySelector } from '@fullcalendar/react';
import axios from 'axios';
import React, { Component, useId } from 'react';
import { useState, useCallback, useRef, useEffect } from 'react';
import PlanInsert from './PlanInset';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import { identity } from 'lodash';

const MemoList = () => {
    const thisTime = new Date();

    const [plan, setPlan] = useState([
        {
            id: '',
            memo: '',
        },
    ]);
    const [lastIdx, setLastIdx] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/api/attends');
            const _userMemoData = await data.map(
                (item: any) => (
                    setLastIdx(lastIdx + 1),
                    {
                        id: item._id,
                        memo: item.memo,
                    }
                ),
            );
            return setPlan(plan.concat(_userMemoData));
        }
        fetchData();
    }, []);

    const [memoColor, setMemoColor] = useState(['text-amber-400', 'text-sky-400', 'text-pink-400']);

    const nextId = useRef(1);

    const addPlan = useCallback(
        async (input: string) => {
            const newPlan = {
                id: nextId.current,
                memo: input,
            };
            await axios.post('/attends', {
                newPlan,
            });
            nextId.current++;
            setPlan((plan) => plan.concat(newPlan));
            console.log(newPlan);
        },
        [plan],
    );

    const removePlan = useCallback(
        (id: string) => {
            setPlan(plan.filter((plan) => plan.id !== id));
        },
        [plan],
    );

    return (
        <div className="hidden w-full max-w-full flex items-center absolute flex-col justify-between z-50 bottom-0 pt-10 bg-indigo-50 shadow-indigo-600/50 rounded-t-3xl border-indigo-400 h-[99vh]">
            <header className="flex b- justify-center pb-6 items-center">
                <div className="rounded-full p-6 bg-white shadow-lg shadow-indigo-300/50 text-indigo-400 px-10 text-2xl">
                    <span className="">
                        {thisTime.getFullYear()}년 {thisTime.getMonth()}월 {thisTime.getDate()}일 오늘의 운동
                    </span>
                </div>
            </header>
            <section className="workCart mt-10 w-full h-full">
                <PlanInsert addPlan={addPlan}></PlanInsert>
            </section>
            <footer
                className="
            p-4 flex justify-btween items-center addWork w-full h-[30%]"
            ></footer>
        </div>
    );
};
export default MemoList;
