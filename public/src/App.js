import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/course';
import MoodTracker from './components/moodTracker';
import Login from './components/User/login';
import Signup from '.components//User/signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<course />} />
          <Route path="/mood-tracker" element={<moodTracker />} />
          <Route path="/login" element={<User/login />} />
          <Route path="/register" element={<User/signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



