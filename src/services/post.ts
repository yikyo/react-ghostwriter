import qs from 'query-string';
import { Api } from '../constants';
import { Axios } from '../helpers';

export interface IFetchPostListParams {
  page: string;
  limit: number;
}

interface IPostItem {
  id: string;
  title: string;
  url: string;
  published_at: string;
}

export default class PostService {
  public static list = (payload: IFetchPostListParams) => {
    return Axios.get(`${Api.POSTS}&${qs.stringify(payload)}`).then(response => {
      const result = { pagination: {}, data: [] };

      if (response.data) {
        if (response.data.meta && response.data.meta.pagination) {
          result.pagination = {
            next: response.data.meta.pagination.next,
            prev: response.data.meta.pagination.prev,
          };
        }

        if (response.data.posts && Array.isArray(response.data.posts)) {
          result.data = response.data.posts.map((elem: IPostItem) => {
            return {
              date: elem.published_at,
              id: elem.id,
              link: elem.url,
              title: elem.title,
            };
          });
        }
      }

      return result;
    });
  };

  public static getByTitle = () => {
    return Axios.get(`${Api.POSTS_BY_TITLE}`).then(response => {
      if (
        !response.data ||
        !response.data.posts ||
        !Array.isArray(response.data.posts)
      ) {
        return {};
      }

      return {
        author: 'yiKyo',
        content: response.data.posts[0].html,
        date: response.data.posts[0].published_at,
        title: response.data.posts[0].title,
      };
    });
  };
}
