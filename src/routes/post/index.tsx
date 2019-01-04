import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Post } from '../../components';
import { TDispatch, TRootState } from '../../store';

class Posts extends Component<TProps> {
  public componentDidMount() {
    this.initPostData();
  }

  public initPostData = () => {
    this.props.fetch();
  };

  public render() {
    const { post } = this.props;

    return (
      <Post
        title={post.title}
        content={post.content}
        author={post.author}
        tags={post.tags}
        date={post.date}
      />
    );
  }
}

const mapStateToProps = (state: TRootState) => ({
  post: state.post.item,
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  fetch: dispatch.post.fetch,
});

interface IRouteProps {
  match: {
    params: string;
  };
}

type TProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  IRouteProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
