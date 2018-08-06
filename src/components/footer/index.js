import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Style from './style.scss';

const Footer = ({ name, url }) => (
  <footer>
    <div className="container">
      <div className={Style.siteTitleWrapper}>
        <h1 className={Style.siteTitle}>
          <Link title={name} to={url}>
            {name}
          </Link>
        </h1>

        <Link
          className={`${Style.buttonSquare} ${Style.buttonJumpTop}`}
          to="/#"
        >
          <i className="fa fa-angle-up" />
        </Link>
      </div>

      <p className={Style.copyright}>
        © 2018 / Published with <Link to="https://ghost.org">Ghost</Link>/
        <Link to="https://github.com/roryg/ghostwriter">Ghostwriter theme</Link>
        By <Link to="http://yikyo.com">yiKyo</Link>
      </p>
    </div>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Footer;
