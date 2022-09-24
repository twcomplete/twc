import React, { useState } from 'react';
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import MemoList from './MemoList';

function TwcCal() {
    return (
        <>
            <article className="w-[90%] mb-[20px] p-3 bg-indigo-200 text-indigo-500 shadow-lg shadow-indigo-600/50 rounded-xl border-indigo-400">
                <FullCalendar
                    viewClassNames={'w-full'}
                    locale="kr"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    selectable={true}
                    weekends={true}
                    titleFormat={{
                        year: 'numeric',
                        month: 'numeric',
                    }}
                    headerToolbar={{
                        start: 'title',
                        center: '',
                        end: 'today prev next',
                    }}
                    contentHeight={'300px'}
                />
            </article>
        </>
    );
}
export default TwcCal;
