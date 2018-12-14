import { Axios } from '../helpers';

export default class AppService {
  public static initAxios = () => {
    AppService.initAxiosHeaders();
  };

  private static initAxiosHeaders = () => {
    Axios.setHeader('token', '1234');
  };
}
