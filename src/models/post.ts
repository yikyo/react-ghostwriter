import { createModel } from '@rematch/core';
import { IPostServiceListParams, PostService } from '../services';

export interface IPost {
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
    list: {
      data: [],
      pagination: {},
    },
  },

  reducers: {
    updateList: (state, payload) => {
      const val = {};

      Object.assign(val, state, { list: payload });

      return val;
    },
  },

  effects: dispatch => ({
    async fetchList(payload: IPostServiceListParams) {
      const data = await PostService.list(payload);
      dispatch.post.updateList(data);
    },
  }),
});
