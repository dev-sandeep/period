import React from 'react'
import AppContext from './../Context/AppContext'
import GlobalContext from '../Utility/GlobalContext'

const setContext = (context)=>{
    //setting the context globally
    GlobalContext(context);
    //check for localstorage
    // console.log(localStorage.state);
}

class FirstTimeLoad extends React.Component{
    render(){
        return(
            <AppContext.Consumer>
                {
                    (context)=>
                        {setContext(context)}
                }
            </AppContext.Consumer>
        )
    }
}

export default FirstTimeLoad;