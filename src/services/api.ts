import axios, { AxiosInstance } from 'axios';


export const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 5000,
  });
};

export const api = createAPI();