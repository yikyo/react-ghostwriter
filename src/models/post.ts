import { createModel } from '@rematch/core';
import { IFetchPostListParams, PostService } from '../services';

export interface IPost {
  item: {
    author: string;
    date: string;
    title: string;
    content: string;
  };
  list: {
    data: Array<{
      id: string;
      title: string;
      link: string;
      date: string;
    }>;
    pagination: {
      next?: number;
      prev?: number;
    };
  };
}

export const post = createModel({
  state: {
    item: {
      author: '',
      content: '',
      date: '',
      title: '',
    },
    list: {
      data: [],
      pagination: {},
    },
  },

  reducers: {
    updateItem: (state, payload) => {
      const val = {};
      Object.assign(val, state, { item: payload });
      return val;
    },

    updateList: (state, payload) => {
      const val = {};
      Object.assign(val, state, { list: payload });
      return val;
    },
  },

  effects: dispatch => ({
    async fetch() {
      const data = await PostService.getByTitle();
      dispatch.post.updateItem(data);
    },
    async fetchList(payload: IFetchPostListParams) {
      const data = await PostService.list(payload);
      dispatch.post.updateList(data);
    },
  }),
});
