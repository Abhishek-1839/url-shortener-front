import React, { useState, useEffect } from 'react';
import api from './api';
import UrlShortenerPage from './UrlShortenerPage';
import { Link, useNavigate } from 'react-router-dom';
const DashboardPage = () => {
  const [urlCounttotal, setUrlCounttotal] = useState({
    count :0
  })
  const [urlCount, setUrlCount] = useState({
    daily: 0,
    monthly: 0,
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUrlCount = async () => {
      try {
        const response = await api.get('/url/count');
        setUrlCounttotal(response.data);
      } catch (error) {
        console.error('Error fetching URL count:', error);
      }
    };
    fetchUrlCount();
  }, []);

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Daily URL Count: {urlCount.daily}</p>
      <p>Monthly URL Count: {urlCount.monthly}</p>
      <p>Total URL Counts: {urlCounttotal.count}</p>
      <UrlShortenerPage />
      <br />
      <br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default DashboardPage;