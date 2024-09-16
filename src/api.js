import axios from 'axios';

const api = axios.create
({
  // baseURL: 'http://localhost:8005',
  baseURL: 'https://url-shortener-backend-aivc.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials : true,
});

// Add a new endpoint to handle redirects
// api.interceptors.push({
//   responseError: (error) => {
//     if (error.response.status === 404) {
//       // Handle 404 errors
//     }
//     return Promise.reject(error);
//   },
// });

export default api;