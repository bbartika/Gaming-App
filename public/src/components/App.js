import React from 'react';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import AddMood from './components/moodTracking.js';
import AddResource from './components/';
import RelaxationTechnique from './components/Relaxation/RelaxationTechnique';

function App() {
  return (
    <div className="App">
      <h1>Mental Wellness App</h1>
      <Login />
      <Signup />
      <AddMood />
      <AddResource />
      <RelaxationTechnique />
    </div>
  );
}

export default App;
