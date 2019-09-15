import React from 'react'
import UseCycle from '../Context/UseCycle'
import { onSelectEvent } from '../Utility/Events'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

function CalendarComp() {
    const { changeSelectDateVisibility, events, updateTempEvent } = UseCycle();
    const localizer = momentLocalizer(moment);
    const style = {
        calHeight: {
            height: '100vh',
            'marginTop': '3%'
        }
    };

    let state = {
        events: events
    };

    const onSelectDate = (e) => {
        let tempEvent = {
            start: e.slots[0],
            end: new Date(moment(new Date(e.slots[0])).add(3, "days")),
            title: "Dates"
        }
        updateTempEvent(tempEvent);
        changeSelectDateVisibility();
    }

    const eventStyleGetter = (event) => {
        let style = {
            backgroundColor : 'aqua',
            color: 'black',
            border: '1px',
        }

        if(event.title == 'Dates'){
            style.backgroundColor = 'pink'
            style.color = 'black'
        }
        return {
            style
        }
    }


    return (
        <>
            <Calendar
                style={style.calHeight}
                localizer={localizer}
                events={state.events}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectDate}
                selectable={true}
                eventPropGetter={eventStyleGetter}
            />
        </>
    );
}

export default CalendarComp;