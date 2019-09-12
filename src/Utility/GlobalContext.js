import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

let context = '';
const GlobalContext = (contextInstance)=>{
    if(!context)
        context = contextInstance;
    return context;
}
export default GlobalContext;