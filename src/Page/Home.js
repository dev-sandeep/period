import React, { useContext } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import AppContext from '../Context/AppContext'
import '../../src/App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { onSelectEvent, onSelectDate } from '../Utility/Events'
import { CycleSelectModal } from './../Component/Popup'
import GlobalContext from '../Utility/GlobalContext'

const style = {
    calHeight: {
        height: '100vh',
        'marginTop': '3%'
    }
};

const localizer = momentLocalizer(moment);
const setContext = (context)=>{
    GlobalContext(context);
}
class Home extends React.Component {

    state = {
        events: [
            {
                start: new Date(),
                end: new Date(moment().add(1, "days")),
                title: "Some title"
            }
        ]
    };

    render() {
       
        return (
            <AppContext.Consumer>
                {(context) =>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                {setContext(context)}
                                {/* The calendar goes here */}
                                <Calendar
                                    style={style.calHeight}
                                    localizer={localizer}
                                    events={this.state.events}
                                    startAccessor="start"
                                    endAccessor="end"
                                    onSelectEvent={onSelectEvent}
                                    onSelectSlot={onSelectDate}
                                    selectable={true}
                                />
                            </div>
                        </div>
                        <CycleSelectModal />
                    </div>
                }
            </AppContext.Consumer>
        )
    }
}

export default Home;