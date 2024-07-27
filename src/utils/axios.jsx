import axios from "axios";
import {store} from './store/store'
import { BACKEND_URL } from "./constants";

// Axios instance for login and registration
export const axiosAuth = axios.create({
  baseURL: `${BACKEND_URL}/api/auth`,
});

// Axios instance for authenticated API access
export const axiosInstance = axios.create({
  baseURL: `${BACKEND_URL}/api`,
});

// Interceptor to add token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Function to set common headers including CORS headers
const setCommonHeaders = (axiosInstance) => {
  axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // This line won't solve CORS issue by itself
  axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
};

// Apply headers to both instances
setCommonHeaders(axiosAuth);
setCommonHeaders(axiosInstance);
