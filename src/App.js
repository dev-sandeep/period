import React from 'react';
import './App.css';
import Header from './Content/Header'
import Home from './Page/Home'
import { CycleContextProvider } from './Context/CycleContext'
import FirstTimeLoad from './Component/FirstTimeLoad'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';

function App() {
  return (
    <CycleContextProvider>
      <div className="App">
        {/* <FirstTimeLoad /> */}
        <Header />
        <Home />
        {/* <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Help" component={Help} />
          </Switch>
        </Router> */}
      </div>
    </CycleContextProvider>
  );
}

export default App;
