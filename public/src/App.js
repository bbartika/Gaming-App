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
          <Route path="/course" element={<CourseList />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



