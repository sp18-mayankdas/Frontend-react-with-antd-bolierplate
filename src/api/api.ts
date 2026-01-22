import http from './http';

export type Service = 'auth';

const SERVICE_BASE_URL: Record<Service, string> = {
  auth: import.meta.env.VITE_API_AUTH_URL as string,
};

function joinUrl(base: string, path: string) {
  const b = base?.endsWith('/') ? base.slice(0, -1) : base;
  const p = path?.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}

type BaseCfg = {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  multipart?: boolean;
  withoutAuth?: boolean;
  noDefaultHeaders?: boolean;
};

export const api = {
  get: <T>(service: Service, path: string, cfg: BaseCfg = {}) =>
    http.get<T>(joinUrl(SERVICE_BASE_URL[service], path), { params: cfg.params, ...cfg }),
  post: <T>(service: Service, path: string, data?: any, cfg: BaseCfg = {}) =>
    http.post<T>(joinUrl(SERVICE_BASE_URL[service], path), data, { params: cfg.params, ...cfg }),
  put: <T>(service: Service, path: string, data?: any, cfg: BaseCfg = {}) =>
    http.put<T>(joinUrl(SERVICE_BASE_URL[service], path), data, { params: cfg.params, ...cfg }),
  patch: <T>(service: Service, path: string, data?: any, cfg: BaseCfg = {}) =>
    http.patch<T>(joinUrl(SERVICE_BASE_URL[service], path), data, { params: cfg.params, ...cfg }),
  remove: <T>(service: Service, path: string, cfg: BaseCfg = {}) =>
    http.delete<T>(joinUrl(SERVICE_BASE_URL[service], path), { params: cfg.params, ...cfg }),
};

export default api;
