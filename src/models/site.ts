import { createModel } from '@rematch/core';
import { SiteService } from '../services';

export interface ISite {
  navs: Array<{
    title: string;
    link: string;
  }>;
  title: string;
}

export const site = createModel({
  state: {
    navs: [],
    title: '',
  },

  reducers: {
    update: (state, payload) => {
      const val = {};

      Object.assign(val, state, payload);

      return val;
    },
  },

  effects: dispatch => ({
    async fetchSiteData() {
      const data = await SiteService.get();
      dispatch.site.update(data);
    },

    async fetchSiteNavs() {
      const data = await SiteService.getNavigation();

      dispatch.site.update({ navs: data });
    },
  }),
});
