import React from 'react';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import AddMood from './components/moodTracker;
import AddResource from './components/resource';
import RelaxationTechnique from './components/relaxationTechnique';

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
