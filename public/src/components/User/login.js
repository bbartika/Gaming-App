import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { useremail, userpassword };
    axios.post('http://localhost:3000/user/login', details)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        console.log('Login successful');
      })
      .catch((err) => console.error('Login failed', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={useremail} onChange={(e) => setUseremail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
