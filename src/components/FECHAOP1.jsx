import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EleccionFecha = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Función para filtrar fechas no disponibles (ejemplo)
    const filterDates = (date) => {
        // Obtén la fecha actual
        const today = new Date();

        // Ejemplo: deshabilitar fechas anteriores a hoy
        return date >= today;
    };

    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>FECHA Y HORA</h1>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="dd/MM/yyyy HH:mm"
                timeCaption="Hora"
                placeholderText="Selecciona fecha y hora"
                filterDate={filterDates} // Aplica el filtro
            />
        </div>
    );
};

export default EleccionFecha;
