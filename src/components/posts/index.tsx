import format from 'date-fns/format';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../pagination';
import Style from './style.scss';

interface IProps {
  posts: Array<{
    id: string;
    title: string;
    date: string;
    link: string;
  }>;
  pagination: {
    next?: number;
    prev?: number;
  };
}

const PostList: React.SFC<IProps> = ({ posts, pagination }) => (
  <Fragment>
    <ol className={Style.postList}>
      {posts.map(elem => (
        <li key={elem.id} className={Style.post}>
          <Link className={Style.link} to={`/posts${elem.link}`}>
            <h4 className={Style.title}>{elem.title}</h4>/
            <time className={Style.date} dateTime={elem.date}>
              Published {format(elem.date, 'MMMM Do YYYY')}
            </time>
          </Link>
        </li>
      ))}
    </ol>
    <Pagination {...pagination} />
  </Fragment>
);

export default PostList;
