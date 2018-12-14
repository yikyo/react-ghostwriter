import { Api } from '../constants';
import { Axios } from '../helpers';

export default class PostService {
  public static list = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          list: [
            {
              date: '2018-08-07T01:47:34.000Z',
              id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f9',
              link: '/welcome/',
              title: 'Welcome to Ghost',
            },
            {
              date: '2018-08-07T01:47:34.000Z',
              id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f1',
              link: '/welcome/',
              title: 'Welcome to Ghost',
            },
            {
              date: '2018-08-07T01:47:34.000Z',
              id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f2',
              link: '/welcome/',
              title: 'Welcome to Ghost',
            },
          ],
          pagination: {
            next: 3,
            prev: 1,
          },
        });
      }, 1000);
    });
  };
}
