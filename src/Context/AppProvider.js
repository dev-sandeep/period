import React from 'react'
import AppContext from './AppContext'

const URL = {
    BASE: 'https://newsapi.org/v2/top-headlines',
    API_KEY: '0dc8ac7f0e564f7a98de3c56a0d9c640',
    COUNTRY: 'in',
    getDefaultUrl: function (country = this.COUNTRY) {
        return this.BASE + '?apikey=' + this.API_KEY + '&country=' + country;
    }
};

const setDataFromLocalStorage = () => {
    if (localStorage.state) {
        setting: {

        }
    } else {
        localStorage.state = {};
    }
}

class AppProvider extends React.Component {
    assignState(data) {
        this.setState(data);
    }

    state = {
        title: 'App for her',
        selectedDate: '',
        dayModalVisibilityStatus: false,
        displaySettingVisibilityStatus: false,

        dayModalVisibility: (status) => {
            this.assignState({
                dayModalVisibilityStatus: status
            });
        },
      
        displaySettingVisibility: (status) => {
            console.log(status);
            this.assignState({
                displaySettingVisibilityStatus: status
            });
        },

        setting: {
            isSet: false,
            age: 18,
            daysLast: 3,
            cycle: 28
        },

        setSetting: (setting) => {
            // this.setState({ setting });
            Object.assign(localStorage.state, setting);
            Object.assign(localStorage.state, { isSet: true });
        }
    }

    render() {
        return (
            <AppContext.Provider
                value={this.state}>

                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;

