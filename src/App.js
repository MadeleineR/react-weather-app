import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="app">
      <main className="app-content">
        <h1 className="app-title">8 Tage Wetter</h1>
        <Weather/>
      </main>
    </div>
  );
}

export default App;
