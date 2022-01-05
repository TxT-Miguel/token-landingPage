import React from 'react';
import logo from './logo.svg';
// import './App.css';

// components
import Navbar from './components/Navbar';
import AboutMoose from './components/AboutMoose';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMoose />
      <Team />
    </div>
  );
}

export default App;
