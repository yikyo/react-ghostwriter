import React, { Component } from 'react';
import { PostList } from '../../components';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: [
        {
          id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f9',
          blogTitle: "yiKyo's blogs",
          title: 'Welcome to Ghost',
          link: '/welcome/',
          date: '2018-08-07T01:47:34.000Z',
        },
        {
          id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f1',
          blogTitle: "yiKyo's blogs",
          title: 'Welcome to Ghost',
          link: '/welcome/',
          date: '2018-08-07T01:47:34.000Z',
        },
        {
          id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f2',
          blogTitle: "yiKyo's blogs",
          title: 'Welcome to Ghost',
          link: '/welcome/',
          date: '2018-08-07T01:47:34.000Z',
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;
    return <PostList data={posts} />;
  }
}

export default Posts;
