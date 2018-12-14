import { Api } from '../constants';
import { Axios } from '../helpers';

export default class SiteService {
  public static get = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          logo: '//casper.ghost.org/v1.0.0/images/ghost-logo.svg',
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
