import React from 'react';
import '@fullcalendar/react/dist/vdom';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import axios from 'axios';
import { useCallback } from 'preact/hooks';

function TwcCal() {
    axios
        .get('localhost:3000/attends')
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <article
            id="full_calendar"
            className="w-[90%] mb-[20px] p-3 bg-indigo-200 text-indigo-500 shadow-lg shadow-indigo-600/50 rounded-xl border-indigo-400">
            <FullCalendar
                viewClassNames={'w-full'}
                timeZone="kr"
                locale="kr"
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                weekends={true}
                defaultAllDay={true}
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
                events={[
                    {
                        className: 'complate-day',
                        start: '2022-09-20',
                    },
                    {
                        className: 'complate-day',
                        start: '2022-09-21',
                    },
                ]}
                eventDisplay={'background'}
                eventBackgroundColor={'#6967F2'}
                eventClick={() => {
                    alert('event');
                }}
                dateClick={() => {
                    alert('date');
                }}
            />
        </article>
    );
}
export default TwcCal;
