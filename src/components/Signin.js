import React, { useState } from 'react';
import './styles.css';
import Profile from './Profile';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  
  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle user sign in
  const handleSignin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.email === formData.email && user.password === formData.password) {
        setErrorMessage('');
        setLoggedIn(true);
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } else {
      setErrorMessage('User not found.');
    }
  };

  return (
    <div>
      {!loggedIn && (
        <div className="form">
          <h2>Sign In</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSignin}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
      {loggedIn && <Profile />}
    </div>
  );
};

export default Signin;
