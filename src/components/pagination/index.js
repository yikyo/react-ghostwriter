import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Style from './style.scss';

const Pagination = ({ prev, next }) => (
  <nav className={Style.pagination} role="navigation">
    {prev && (
      <Link className={Style.newerPosts} to={`/page/${prev}`} rel="prev">
        <span aria-hidden="true">←</span> Newer Posts
      </Link>
    )}
    {next && (
      <Link className={Style.olderPosts} to={`/page/${next}`} rel="next">
        Older Posts <span aria-hidden="true">→</span>
      </Link>
    )}
  </nav>
);

Pagination.propTypes = {
  prev: PropTypes.oneOfType([null, PropTypes.number]).isRequired,
  next: PropTypes.oneOfType([null, PropTypes.number]).isRequired,
};

export default Pagination;
