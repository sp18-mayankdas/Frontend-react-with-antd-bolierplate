import axios, { AxiosError, type AxiosInstance } from 'axios';

import type { IRequestConfig } from './interfaces';

// Single Axios instance with shared interceptors
const http: AxiosInstance = axios.create({
  timeout: 15000,
  withCredentials: false,
});

// Request interceptor: auth + common headers
http.interceptors.request.use((config: IRequestConfig) => {
  const { noDefaultHeaders, withoutAuth } = config;
  const multipart = (config as any)?.multipart as boolean | undefined;

  if (!noDefaultHeaders) {
    const headers = ((config.headers as any) ?? {}) as Record<string, string>;
    // Only set JSON content type if NOT multipart. For multipart, let the browser set boundary
    if (!multipart) {
      headers['Content-Type'] = headers['Content-Type'] ?? 'application/json';
    }
    headers['Access-Control-Allow-Origin'] = headers['Access-Control-Allow-Origin'] ?? '*';
    headers['Access-Control-Allow-Headers'] =
      headers['Access-Control-Allow-Headers'] ?? 'Origin, X-Requested-With, Content-Type, Accept';

    if (!withoutAuth && headers.Authorization === undefined) {
      const token = localStorage.getItem('user-access-token');
      if (token) headers.Authorization = `Bearer ${token}`;
    }

    config.headers = headers as any;
  }

  return config as any;
});

// Response interceptor: normalize errors
http.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    const data: any = error.response?.data;
    const msg = data?.message || error.message || 'Unexpected error';
    if (status === 401) {
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject({ status, message: msg, data, original: error });
  }
);

export default http;
