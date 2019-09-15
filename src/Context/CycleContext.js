import React, { useState } from 'react';
import moment from 'moment'

const CycleContext = React.createContext([{}, () => { }]);

const CycleContextProvider = (props) => {
    const [state, setState] = useState({
        title:'abc',
        dayModalVisibilityStatus: false,
        displaySettingVisibilityStatus: false,
        events: [{
            start: new Date(),
            end: new Date(moment().add(1, "days")),
            title: "Sample"
        }],
        tempEvent :{}
    });

    return (
        <CycleContext.Provider value={[state, setState]}>
            {props.children}
        </CycleContext.Provider>
    );
};

export { CycleContext, CycleContextProvider };
