import React from 'react';
import { Link } from 'react-router-dom';

import Style from './style.scss';

const Header = () => (
  <header>
    <div className={Style.container}>
      <div className={Style.siteTitleWrapper}>
        <Link
          className={Style.siteLogo}
          title="yikyo's blog"
          to="http://localhost:2368"
        >
          <img
            src="https://casper.ghost.org/v1.0.0/images/ghost-logo.svg"
            alt="yikyo's blog"
          />
        </Link>
      </div>

      <ul className={Style.siteNav}>
        <li className={Style.siteNavItem}>
          <Link title="yikyo's blog" to="http://localhost:2368">
            Latest Post
          </Link>
        </li>
        <li className={Style.siteNavItem}>
          <Link title="yikyo's blog" to="http://localhost:2368">
            Browse Posts
          </Link>
        </li>

        <li className={Style.siteNavItem}>
          <Link title="Home | yikyo's blog" to="http://localhost:2368/">
            Home
          </Link>
        </li>

        <li className={Style.siteNavItem}>
          <Link to="http://localhost:2368/rss">RSS</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
