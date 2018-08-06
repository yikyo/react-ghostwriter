import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../footer';
import Style from './style.scss';

const Layout = ({ children }) => (
  <div className={Style.container}>
    <main>{children}</main>
    <Footer name="yiKyo's blog" url="/" />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
