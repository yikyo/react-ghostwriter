import React from 'react';
import { Link } from 'react-router-dom';

import Style from './style.scss';

interface IProps {
  prev?: number;
  next?: number;
}

const Pagination: React.SFC<IProps> = ({ prev, next }) => (
  <nav className={Style.pagination} role="navigation">
    {prev && (
      <Link className={Style.newerPosts} to={`/posts?page=${prev}`} rel="prev">
        <span aria-hidden="true">←</span> Newer Posts
      </Link>
    )}
    {next && (
      <Link className={Style.olderPosts} to={`/posts?page=${next}`} rel="next">
        Older Posts <span aria-hidden="true">→</span>
      </Link>
    )}
  </nav>
);

export default Pagination;
