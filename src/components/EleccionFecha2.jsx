import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);
const eventos = [
    {
        title: 'Reunión importante',
        start: new Date(2023, 10, 15, 10, 0), // Ejemplo: 15 de octubre de 2023 a las 10:00 AM
        end: new Date(2023, 10, 15, 11, 0), // Ejemplo: 15 de octubre de 2023 a las 11:00 AM
    },
    // Agrega más eventos aquí
];
function MiCalendario() {
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }} // Ajusta la altura según tus necesidades
            />
        </div>
    );
}

export default MiCalendario;


