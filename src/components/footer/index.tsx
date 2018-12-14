import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import Style from './style.scss';

interface IProps {
  title: string;
}

const Footer: React.SFC<IProps> = ({ title }) => (
  <footer>
    <div className={Style.container}>
      <div className={Style.siteTitleWrapper}>
        <h1 className={Style.siteTitle}>
          <Link title={title} to="/">
            {title}
          </Link>
        </h1>

        <Link className={Style.buttonJumpTop} to="/">
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

export default Footer;
