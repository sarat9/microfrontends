import React from 'react';
import logo from './logo.svg';
import './App.css';
const RemoteFancyButton = React.lazy(()=> import('microfrontendshost/FancyButton'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Application - Frontend One
        </p>
        <br />
        <React.Suspense fallback="Loading...">
          <RemoteFancyButton />
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
