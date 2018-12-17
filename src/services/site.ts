import { Api } from '../constants';
import { Axios } from '../helpers';

export default class SiteService {
  public static get = () => {
    return new Promise(resolve => {
      resolve({
        title: "yiKyo's blogs",
      });
    });
  };

  public static getNavigation = () => {
    return new Promise(resolve => {
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
    });
  };
}
