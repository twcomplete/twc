import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';

const PlanInsert = ({ addPlan }) => {
    const [input, setInput] = useState('');
    const handlePlan = useCallback((e: any) => {
        setInput(e.target.value);
    }, []);

    const workOutTag = [
        {
            id: 'upper',
            name: '상체',
        },
        {
            id: 'lower',
            name: '하체',
        },

        { id: 'cardio', name: '유산소' },
    ];

    const submitPlan = useCallback(
        (e: any) => {
            e.preventDefault();
            addPlan(input);
            setInput('');
        },
        [input, addPlan],
    );

    return (
        <>
            <form onSubmit={submitPlan} className="w-full flex  flex-col items-center h-full">
                <input
                    autoComplete="off"
                    type="text"
                    id="typList"
                    className="typlist border-b-indigo-200 border-b-2 rounded-sm
                    p-2 w-[90%] max-w-full
                    focus:outline-none focus:border-indigo-400"
                    placeholder="오늘의 루틴을 입력하세요"
                    value={input}
                    onChange={handlePlan}
                />
                <div className="flex flex-row justify-center gap-4">
                    {workOutTag.map((item, index) => (
                        <button
                            className="text-indigo-400 text-[1.5rem] px-7 py-2 rounded-full border border-indigo-200 bg-white active:bg-indigo-400 active:text-white active:border-white transition: .3s"
                            id={item.id}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </form>
        </>
    );
};

export default PlanInsert;
