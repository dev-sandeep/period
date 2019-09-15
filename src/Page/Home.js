import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import '../../src/App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import CycleSelectModal from '../Component/DateSelectPopup'
import SettingModal from './../Component/SettingPopup'
import CalendarComp from './../Component/CalendarComp'

class Home extends React.Component {

    render() {
        return (
            <AppContext.Consumer>
                {(context) =>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <CalendarComp />
                            </div>
                        </div>
                        <CycleSelectModal />
                        <SettingModal />
                    </div>
                }
            </AppContext.Consumer>
        )
    }
}

export default Home;