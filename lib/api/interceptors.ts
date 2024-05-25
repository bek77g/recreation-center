import { RoutesUrls } from '~shared/lib/router';

import { ApiError, ApiRequestConfig, ApiResponse } from './types';

export const errorHandler = (err: ApiError) => {
  console.error('[Error handler]:');
  console.error(err);

  if (err.response?.status === 401) {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
    const path = window.location.pathname;

    if (!path.startsWith(RoutesUrls.cabinet)) {
      console.log('ok');
    } else {
      window.location.replace('/');
    }
  }

  return Promise.reject(err);
};

export const requestHandler = (config: ApiRequestConfig) => {
  const headers = config.headers || {};
  const tokenValue = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);

  if (tokenValue) {
    headers.Authorization = JSON.parse(tokenValue);
  }

  return { ...config, headers };
};

export const responseHandler = (res: ApiResponse) => {
  return res.data;
};
