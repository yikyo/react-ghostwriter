import React from 'react';
import PropTypes from 'prop-types';

import PostItem from '../posts-item';
import Style from './style.scss';

const PostList = ({ data }) => (
  <ol className={Style.postList}>
    {data.map(elem => (
      <PostItem key={elem.id} {...elem} />
    ))}
  </ol>
);

PostList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      blogTitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostList;
