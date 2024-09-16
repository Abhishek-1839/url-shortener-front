import React, { useState } from 'react';
import api from './api';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    
    console.log('Sending registration data:', userData);
    try {
      const response = await api.post('/auth/register', userData);
      console.log('Registration response:', response.data);
      console.log(response.data);
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {

      console.error('Registration error:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        setError(error.response.data.error || 'An error occurred during registration.');
      } else if (error.request) {
        console.error('No response received');
        setError('No response received from the server. Please try again later.');
      } else {
        console.error('Error setting up request:', error.message);
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Register</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default RegisterPage;