import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick



const CalendarioFullCalendar = ({turnos}) => {
    
    console.log(turnos)
    return (
        <div style={{margin:'100px'}}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                dateClick={function(info){ alert('Date: ' + info.date)}}
                initialView={"dayGridMonth"} //dayGridMonth , timeGridWeek, timeGridDay
                // dateClick={this.handleDateClick}
                headerToolbar={{
                    start: 'today prev, next',
                    center: 'title',
                    end: 'dayGridMonth, timeGridWeek, timeGridDay'
                }}
                height={'1000px'}
                events={turnos}
                eventBackgroundColor='yellow'
                eventTextColor='black'
                
            />
        </div>
    )
}

export default CalendarioFullCalendar
