import { createModel } from '@rematch/core';

import { AppService } from '../services';

export type TServerTime = number;

export const serverTime = createModel({
  state: 0,

  reducers: {
    update: (state, payload) => payload,
  },

  effects: dispatch => ({
    async fetch() {
      dispatch.serverTime.update(1);
    },
  }),
});
