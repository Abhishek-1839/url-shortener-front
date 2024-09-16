import React, { useState, useEffect } from 'react';
import api from './api';

const UrlListPage = () => {
  console.log("first");
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        console.log("Fetching URLs from API...");
        const response = await api.get('/urllist');
        console.log("API Response:", response.data); // Check if the response data is empty
        setUrls(response.data);
      } catch (error) {
        console.error('Error fetching URLs:', error);
        setError('Failed to fetch URLs.');
      }
    };
  
    fetchUrls();
  }, []);


  const handleShortUrlClick = async (shortId) => {
    try {
      window.location.href = `/${shortId}`;
    } catch (error) {
      console.error('Error redirecting to original URL:', error);
    }
  };

  return (
    <div>
      <h2>URL List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {urls.map((url) => (
          <li key={url._id}>
            <p>Original URL: <a href={url.redirectURL} target="_blank" rel="noopener noreferrer">{url.redirectURL}</a></p>
            <p>Short URL: <a href="#" onClick={() => handleShortUrlClick(url.shortId)}  target="_blank" rel="noopener noreferrer">{url.shortId}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlListPage;
