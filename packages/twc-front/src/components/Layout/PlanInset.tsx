import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';

const PlanInsert = ({ addPlan }) => {
    const [input, setInput] = useState('');
    const handlePlan = useCallback((e: any) => {
        setInput(e.target.value);
    }, []);

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
            <form onSubmit={submitPlan} className="w-full flex justify-between">
                <input
                    autoComplete="off"
                    type="text"
                    id="typList"
                    className="typlist border-b-indigo-200 border-b-2 rounded-sm
                    p-3 w-full max-w-full"
                    placeholder="enter your plan!"
                    value={input}
                    onChange={handlePlan}
                />
                <button
                    type="submit"
                    id="addList"
                    className="addList rounded-full p-2.5 bg-white max-w-[6rem] text-indigo-400 shadow-lg shadow-indigo-300/50 hover:bg-indigo-400 hover:text-white transition: .3s"
                >
                    +
                </button>
            </form>
        </>
    );
};

export default PlanInsert;
