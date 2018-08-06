import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
    <Footer name="yiKyo's blog" url="/" />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
