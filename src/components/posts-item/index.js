import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import Style from './style.scss';

const PostItem = ({ title, date, link }) => (
  <li className={Style.post}>
    <Link className={Style.link} to={link}>
      <h4 className={Style.title}>{title}</h4>/
      <time className={Style.date} dateTime={date}>
        Published {format(date, 'MMMM Do YYYY')}
      </time>
    </Link>
  </li>
);

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PostItem;
