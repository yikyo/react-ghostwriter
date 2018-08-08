import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Style from './style.scss';

const Header = ({ siteTitle, siteLogo, navs }) => (
  <header>
    <div className={Style.container}>
      <div className={Style.siteTitleWrapper}>
        <Link className={Style.siteLogo} title={siteTitle} to="/">
          <img src={siteLogo} alt={siteTitle} />
        </Link>
      </div>

      <ul className={Style.siteNav}>
        {navs.map(nav => (
          <li className={Style.siteNavItem}>
            <Link title={`${nav.title} | ${siteTitle}`} to={nav.link}>
              {nav.title}
            </Link>
          </li>
        ))}

        <li className={Style.siteNavItem}>
          <Link title={`Home | ${siteTitle}`} to="/">
            Home
          </Link>
        </li>

        <li className={Style.siteNavItem}>
          <Link title={`Rss | ${siteTitle}`} to="/rss">
            RSS
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteLogo: PropTypes.string.isRequired,
  navs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
