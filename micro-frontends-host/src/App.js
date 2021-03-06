import React from 'react';
import logo from './logo.svg';
import './App.css';

import FancyButton from './components/FancyButton/FancyButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Micro Frontend Host - Container of all the shared components
        </p>
        <br />
        
        <FancyButton />
      </header>
    </div>
  );
}

export default App;
