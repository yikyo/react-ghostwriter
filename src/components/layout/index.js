import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import './style.scss';

const Layout = ({ siteTitle, siteLogo, navs, children }) => (
  <Fragment>
    <Header siteTitle={siteTitle} siteLogo={siteLogo} navs={navs} />
    <main>{children}</main>
    <Footer siteTitle={siteTitle} />
  </Fragment>
);

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteLogo: PropTypes.string.isRequired,
  navs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
