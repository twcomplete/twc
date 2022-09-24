import { listenBySelector } from '@fullcalendar/react';
import axios from 'axios';
import React, { Component, useId } from 'react';
import { useState, useCallback, useRef, useEffect } from 'react';
import PlanInsert from './PlanInset';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import { identity } from 'lodash';

const MemoList = () => {
    const [plan, setPlan] = useState([
        {
            id: '',
            memo: '',
        },
    ]);
    const [lastIdx, setLastIdx] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://localhost:3000/attends');
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
            await axios.post('http://localhost:3000/attends', {
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
        <div className="w-full flex items-center flex-col justify-between absolute z-50 bottom-0 pt-10 bg-indigo-50 shadow-[0_35px_60px_15px] shadow-indigo-600/50 rounded-3xl border-indigo-400 h-[60%]">
            <header className="flex justify-center pb-6 items-center">
                <h1 className="text-2xl uppercase text-gray-400">add your plan!</h1>
            </header>
            <div className="flex flex-row justify-center gap-4">
                <button
                    className="text-pink-400 text-[1.5rem] px-7 py-2 rounded-full border border-pink-200 bg-white active:bg-pink-400 active:text-white active:border-white transition: .3s"
                    id="upperBodyExercise"
                >
                    상체
                </button>
                <button
                    className="text-amber-400 text-[1.5rem] px-7 py-2 rounded-full border border-amber-200 bg-white"
                    id="lowerBodyExercise"
                >
                    하체
                </button>
                <button
                    className="text-sky-400 text-[1.5rem] px-7 py-2 rounded-full border border-sky-200 bg-white"
                    id="cardioExercise"
                >
                    유산소
                </button>
            </div>
            <section className="workCart mt-10 w-[80%] h-full overflow-y-auto">
                <ul className="workoutmemolist text-3xl">
                    {plan.map((plan) => (
                        <li key={plan.id} className="flex justify-between items-center mb-3">
                            <span className="text-indigo-400">{plan.memo}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <footer
                className="
            p-4 flex justify-btween items-center addWork w-full h-[30%]"
            >
                <PlanInsert addPlan={addPlan}></PlanInsert>
            </footer>
        </div>
    );
};
export default MemoList;
