import React, { useState } from 'react';
import axios from 'axios';
import api from './api';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // To redirect after successful password reset


  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (newPassword !== confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }

    try {
      console.log("first")
      const response = await api.post(`/auth/reset-password/${token}`, {
        newPassword,
      });
      setMessage("Password reset successful. You can now log in with your new password.");
    } catch (error) {
      setError(error.response.data.error);
    }
  };


  const passwordprint = (e)=>{
    console.log(newPassword);
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <br />
        <button type="submit" onClick={passwordprint}>Reset Password</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {message && <div style={{ color: 'green' }}>{message}</div>}
      {message && (
        <div>
          <button onClick={redirectToLogin} style={{ marginTop: '10px' }}>
            Go to Login
          </button>
        </div>
      )}
    
    </div>
  );
};

export default ResetPassword;