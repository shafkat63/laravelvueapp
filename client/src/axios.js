import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel backend
  withCredentials: true, // if using Sanctum
});

export default instance;
