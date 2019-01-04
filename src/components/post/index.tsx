import format from 'date-fns/format';
import React from 'react';
import Style from './style.scss';

interface IProps {
  author: string;
  content: string;
  title: string;
  date: string;
  tags: string;
}

const Post: React.SFC<IProps> = ({ author, title, content, date }) => (
  <article className={Style.article}>
    <header className={Style.header}>
      <h1 className={Style.title}>{title}</h1>
      <p className={Style.date}>
        Published
        <time dateTime={date}>{format(date, 'MMMM Do YYYY')}</time>
        <strong className={Style.author}>
          by <a href={`/author/${author}/`}>{author}</a>
        </strong>
      </p>
    </header>
    <div
      className={Style.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <div className={Style.footer}>
      <p className={Style.tags}>
        <span>Tagged:</span>
        <a href="/tag/espressobin/">Espressobin</a>
      </p>
    </div>
  </article>
);

export default Post;
