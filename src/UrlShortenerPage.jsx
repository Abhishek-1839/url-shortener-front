import React, { useState } from 'react';
import api from './api';
import { Link, useNavigate } from 'react-router-dom';


const UrlShortenerPage = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/url', { url });
      setShortUrl(response.data.id);
    } catch (error) {
      console.error('Error creating short URL:', error);
      setError('Failed to create short URL. Please try again.');
    }
  };

  const handleViewUrls = () => {
    navigate('/url/list');
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter URL:</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <br />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && (
        <div>
          <p>
            Short URL: <a href={`/${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </p>
          <button onClick={handleViewUrls}>View All URLs</button>
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default UrlShortenerPage;