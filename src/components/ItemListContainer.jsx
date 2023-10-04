import React from 'react'
import CalendarioFullCalendar from './CalendarioFullCalendar'

const ItemListContainer = () => {

    const turnos = [
        {
            title  : 'RESERVADO1',
            start  : '2023-10-05'
        },
        {
            title  : 'RESERVADO2',
            start  : '2023-10-05',
            end  :   '2023-10-05T11:30:00',
        },
        {
            title  : 'RESERVAD3',
            start  : '2023-10-05',
            // end  :   '2023-10-05T13:30:00',
        },
        {
            title  : 'RESERVADO4',
            start  : '2023-10-05T14:30:00',
            end  :   '2023-10-05T16:30:00',
        }
    ]

    const disponible = [{title:'HAY TURNOS LIBRES', date:'2023-10-05'}]
    const nodisponible = [{title:'TODO RESERVADO', date:'2023-10-05'}]
    

    return (
        <div>
            <CalendarioFullCalendar turnos= {turnos.length<3 ? disponible : nodisponible}/>
        </div>
    )
}

export default ItemListContainer