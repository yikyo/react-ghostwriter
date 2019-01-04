import React from 'react';
import { Link } from 'react-router-dom';

import Style from './style.scss';

interface IProps {
  author: string;
  content: string;
  title: string;
  date: string;
}

const Post: React.SFC<IProps> = ({ author, title, content, date }) => (
  <article className={Style.container}>
    <header>
      <h1 className={Style.title}>{title}</h1>
      <p className={Style.date}>
        Published
        <time>April 14th 2018</time>
        <strong className={Style.author}>
          by <a href="/author/yikyo/">yiKyo</a>
        </strong>
      </p>
    </header>
    <div
      className={Style.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </article>
);

export default Post;
