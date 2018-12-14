import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostList } from '../../components';
import { TDispatch, TRootState } from '../../store';

class Posts extends Component<TProps> {
  public componentDidMount() {
    const { fetch } = this.props;

    fetch();
  }

  public render() {
    const { posts, pagination } = this.props;

    return <PostList posts={posts} pagination={pagination} />;
  }
}

const mapStateToProps = (state: TRootState) => ({
  pagination: state.post.pagination,
  posts: state.post.list,
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  fetch: dispatch.post.fetch,
});

type TProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
