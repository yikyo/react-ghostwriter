import { faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import Style from './style.scss';

interface IProps {
  title: string;
  logo: string;
  navs: Array<{
    title: string;
    link: string;
  }>;
}

const Header: React.SFC<IProps> = ({ title, logo, navs }) => (
  <header>
    <div className={Style.container}>
      <div className={Style.siteTitleWrapper}>
        <h1 className={Style.siteTitle}>
          <Link title={title} to="/">
            {title}
          </Link>
        </h1>

        <Link className={Style.iconRss} to="/">
          <FontAwesomeIcon icon={faRss} />
        </Link>
      </div>

      <ul className={Style.siteNav}>
        {navs.map(nav => (
          <li key={nav.title} className={Style.siteNavItem}>
            <Link title={`${nav.title} | ${title}`} to={nav.link}>
              {nav.title}
            </Link>
          </li>
        ))}

        <li className={Style.siteNavItem}>
          <Link title={`Home | ${title}`} to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
