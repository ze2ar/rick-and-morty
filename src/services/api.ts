import axios, { AxiosInstance } from 'axios';


export const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 5000,
  });
};

export const api = createAPI();