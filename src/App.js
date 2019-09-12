import React from 'react';
import './App.css';
import Header from './Content/Header'
import Home from './Page/Home'
import AppProvider from './Context/AppProvider'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
