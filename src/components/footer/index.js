import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Style from './style.scss';

const Footer = ({ name, url }) => (
  <footer>
    <div className={Style.container}>
      <div className={Style.siteTitleWrapper}>
        <h1 className={Style.siteTitle}>
          <Link title={name} to={url}>
            {name}
          </Link>
        </h1>

        <Link className={Style.buttonJumpTop} to="/#">
          <FontAwesomeIcon icon={faAngleUp} />
        </Link>
      </div>

      <p className={Style.copyright}>
        © 2018 / Published with <Link to="https://ghost.org">Ghost</Link>/
        <Link to="https://github.com/roryg/ghostwriter">
          React Ghostwriter theme
        </Link>
        By
        <Link to="http://yikyo.com">yiKyo</Link>
      </p>
    </div>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Footer;
