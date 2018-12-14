import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Axios {
  public static get(url: string, data?: object) {
    return axios.get(url, data);
  }

  public static post(url: string, data?: object) {
    return axios.post(url, data);
  }

  public static put(url: string, data?: object) {
    return axios.put(url, data);
  }

  public static delete(url: string, data?: object) {
    return axios.delete(url, data);
  }

  public static setBaseURL(url: string) {
    axios.defaults.baseURL = url;
  }

  public static setHeader(key: string, value: string) {
    axios.defaults.headers.common[key] = value;
  }

  public static addRequestInterceptor(
    interceptor: (
      value: AxiosRequestConfig
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    onRejected?: ((error: any) => any)
  ) {
    axios.interceptors.request.use(interceptor, onRejected);
  }

  public static addResponseInterceptor(
    interceptor: (
      value: AxiosResponse<any>
    ) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    onRejected?: ((error: any) => any)
  ) {
    axios.interceptors.response.use(interceptor, onRejected);
  }
}
