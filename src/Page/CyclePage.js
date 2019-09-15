import React from 'react'
import AppContext from './../Context/AppContext'
import App from '../App';


export const CycleForm = ()=>{
    <AppContext.Consumer>
        {(context)=>
            <h1>Fill up some details about your recent cycle:</h1>
        }
    </AppContext.Consumer>
}