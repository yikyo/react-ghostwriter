import { createModel } from '@rematch/core';
import { PostService } from '../services';

export interface IPost {
  list: Array<{
    id: string;
    title: string;
    link: string;
    date: string;
  }>;
  pagination: {
    next?: number;
    prev?: number;
  };
}

export const post = createModel({
  state: {
    list: [],
    pagination: {},
  },

  reducers: {
    update: (state, payload) => {
      return payload;
    },
  },

  effects: dispatch => ({
    async fetch() {
      const data = await PostService.list();

      dispatch.post.update(data);
    },
  }),
});
