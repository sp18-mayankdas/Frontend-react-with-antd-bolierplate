import type { AxiosRequestConfig } from 'axios';

export type ApiServiceType = 'auth' | '';

export interface ApiPropsType {
  path: string;
  formdata?: any;
  params?: { [key: string]: string | number | boolean };
  service?: ApiServiceType;
  config?: IRequestConfig;
  fromPublicPage?: boolean;
}

export interface PostPropsType extends Omit<ApiPropsType, 'formdata'> {
  formdata?: any;
}

interface IRequestConfigBase extends AxiosRequestConfig<any> {
  noDefaultHeaders?: boolean;
  withoutAuth?: boolean;
}

type HeadersWithoutAuth = Omit<AxiosRequestConfig['headers'], 'Authorization'>;

export type IRequestConfig =
  | (IRequestConfigBase & { noDefaultHeaders: true; headers?: never })
  | (IRequestConfigBase & {
      noDefaultHeaders?: false;
      withoutAuth: true;
      headers?: HeadersWithoutAuth;
    })
  | (IRequestConfigBase & {
      noDefaultHeaders?: false;
      withoutAuth?: false;
      headers?: AxiosRequestConfig['headers'];
    });
