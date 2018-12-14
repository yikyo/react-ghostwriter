import React, { Component, Fragment } from 'react';
import { Pagination, PostList } from '../../components';

interface IState {
  posts: Array<{
    id: string;
    title: string;
    link: string;
    date: string;
  }>;
}

class Posts extends Component<any, IState> {
  public state: {
    posts: [
      {
        id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f9';
        title: 'Welcome to Ghost';
        link: '/welcome/';
        date: '2018-08-07T01:47:34.000Z';
      },
      {
        id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f1';
        title: 'Welcome to Ghost';
        link: '/welcome/';
        date: '2018-08-07T01:47:34.000Z';
      },
      {
        id: 'd734e708-ebac-4b1f-bfbd-96f1cbf335f2';
        title: 'Welcome to Ghost';
        link: '/welcome/';
        date: '2018-08-07T01:47:34.000Z';
      }
    ];
    pagination: {
      next: 3;
      prev: 1;
    };
  };

  public render() {
    const { posts, pagination } = this.state;
    return (
      <Fragment>
        <PostList posts={posts} />
        <Pagination {...pagination} />
      </Fragment>
    );
  }
}

export default Posts;
