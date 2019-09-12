
import React, {useContext} from 'react'
import AppContext from './../Context/AppContext'
import GlobalContext from './GlobalContext';
// import getContext from '../Utility/ReactFn'

export const onSelectEvent = (event) => {
    console.log(event);
}

export const onSelectDate = (event, context) => {
    console.log(event);
    GlobalContext().dayModalVisibility(true);
}