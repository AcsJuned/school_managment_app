import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./EventCalendar.css";

function EventCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="col-lg-4">
        <div className="card mb-4 shadow-sm">
            <div className="card-header bg-gradient-secondary text-white">
                Event Calendar
            </div>
            <div className="card-body">
                <Calendar onChange={setDate} value={date} />
            </div>
        </div>
    </div>
    );
}

export default EventCalendar;
