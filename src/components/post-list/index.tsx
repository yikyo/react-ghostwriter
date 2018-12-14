import format from 'date-fns/format';
import React from 'react';
import { Link } from 'react-router-dom';
import Style from './style.scss';

interface IProps {
  posts: Array<{
    id: string;
    title: string;
    date: string;
    link: string;
  }>;
}

const PostList: React.SFC<IProps> = ({ posts }) => (
  <ol className={Style.postList}>
    {posts.map(elem => (
      <li className={Style.post}>
        <Link className={Style.link} to={elem.link}>
          <h4 className={Style.title}>{elem.title}</h4>/
          <time className={Style.date} dateTime={elem.date}>
            Published {format(elem.date, 'MMMM Do YYYY')}
          </time>
        </Link>
      </li>
    ))}
  </ol>
);

export default PostList;
