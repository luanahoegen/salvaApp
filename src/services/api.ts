import axios from 'axios';

const API_BASE_URL = 'https://boasting-luncheon-clothes.ngrok-free.dev';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

api.interceptors.request.use((config) => {
  console.log(`🚀 Chamando API: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
  return config;
});
