import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import api from './api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // To redirect after login


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Email:', email);
console.log('Password:', password);

            const response = await api.post('/auth/login', {
                email,
                password,
             }
            , 
            {
                // Include credentials to send cookies
                withCredentials: true
            }
            );
            console.log('Login Response:', response); // Check the response
            if (response.status === 200) {
                const userData = response.data;
                localStorage.setItem('userData', JSON.stringify(userData));
                // Successfully logged in, now redirect to home page
                console.log('Login successful');
                navigate('/'); // Redirect to the home page after successful login
            } else {
                setError('Failed to log in. Please check your credentials.');
            }
        }
        catch (error) {
            console.log("Login error:", error.response ? error.response.data.error : 'Server error');
            setError(error.response ? error.response.data.error : 'Server error');
        }
    };


    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}

            <div>
                <button onClick={handleForgotPassword} style={{ marginTop: '10px' }}>
                    Forgot Password?
                </button>
            </div>
        </div>
    );
};

export default Login;