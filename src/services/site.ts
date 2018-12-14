import { Api } from '../constants';
import { Axios } from '../helpers';

export default class SiteService {
  public static get = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: "yiKyo's blogs",
        });
      }, 1000);
    });
  };

  public static getNavigation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            link: '/',
            title: 'Latest Post',
          },
          {
            link: '/posts',
            title: 'Browse Posts',
          },
        ]);
      }, 1000);
    });
  };
}
