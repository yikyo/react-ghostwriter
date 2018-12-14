import { init, RematchRootState } from '@rematch/core';

import Models from './models';

export const store = init({
  models: Models,
});

export type TStore = typeof store;
export type TDispatch = typeof store.dispatch;
export type TRootState = RematchRootState<typeof Models>;
