// src/api/api.js
import axios from 'axios';

// Create a new Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://fin-tracker-8v0g.onrender.com',
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // 1. Get the user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      // 2. Parse the user and get the token
      const user = JSON.parse(userData);
      const token = user.token;
      if (token) {
        // 3. If the token exists, add it to the Authorization header
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    // 4. Return the modified config
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default api;
