import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


const CalendarioFullCalendar = () =>{
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"} //dayGridMonth , timeGridWeek, timeGridDay
                // dateClick={this.handleDateClick}
                headerToolbar={{
                    start: 'today prev, next',
                    center: 'title',
                    end: 'dayGridMonth, timeGridWeek, timeGridDay'
                }}
                height={'1000px'}
            />
        </div>
    )
}

export default CalendarioFullCalendar


// export default class DemoApp extends React.Component {

//     render() {
//         return (
//             <FullCalendar
//                 plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                 dateClick={this.handleDateClick}
//             />
//         )
//     }

//     handleDateClick = (arg) => { // bind with an arrow function
//         alert(arg.dateStr)
//     }

// }