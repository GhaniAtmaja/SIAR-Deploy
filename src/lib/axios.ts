import axios, { AxiosError } from 'axios';

import { getToken } from '@/lib/cookie';

import { UninterceptedApiError } from '@/types/api';

const api = axios.create({
  // baseURL: 'https://siphalal-u9en3.ondigitalocean.app',
  baseURL: 'http://localhost:3001', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

api.interceptors.request.use(function (config) {
  const token = getToken();
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    // parse error
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  },
);

export default api;
