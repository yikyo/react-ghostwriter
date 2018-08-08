import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Layout } from '../../components';

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      siteTitle: "yiKyo's blogs",
      siteLogo: '//casper.ghost.org/v1.0.0/images/ghost-logo.svg',
      navs: [
        {
          title: 'Latest Post',
          link: '/',
        },
        {
          title: 'Browse Posts',
          link: '/posts',
        },
      ],
    };
  }

  componentDidMount() {
    this.initAxios();
  }

  initAxios = () => {
    axios.interceptors.request.use(config => {
      console.log(config);
    });
  };

  render() {
    const { children } = this.props;
    return <Layout {...this.state}>{children}</Layout>;
  }
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppContainer;
