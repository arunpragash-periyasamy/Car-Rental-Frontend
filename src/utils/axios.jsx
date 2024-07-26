import axios from "axios";
import {store} from './store/store'

// Axios instance for login and registration
export const axiosAuth = axios.create({
  baseURL: "http://54.152.178.167:80/api/auth",
});

// Axios instance for authenticated API access
export const axiosInstance = axios.create({
  baseURL: "http://54.152.178.167:80/api",
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
