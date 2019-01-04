import qs from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Posts as PostsComponent } from '../../components';
import { Value } from '../../constants';
import { TDispatch, TRootState } from '../../store';

class Posts extends Component<TProps> {
  public componentDidMount() {
    this.initList();
  }

  public componentDidUpdate(prevProps: TProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.initList();
    }
  }

  public initList = () => {
    const {
      fetchList,
      location: { search },
    } = this.props;

    const params = { page: '1', limit: Value.POSTS_PER_PAGE_LIMIT };
    if (search) {
      const queryString = qs.parse(search);
      if (queryString.page && !Array.isArray(queryString.page)) {
        params.page = queryString.page;
      }
    }

    fetchList(params);
  };

  public render() {
    const {
      posts: { data, pagination },
    } = this.props;

    return <PostsComponent posts={data} pagination={pagination} />;
  }
}

const mapStateToProps = (state: TRootState) => ({
  posts: state.post.list,
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  fetchList: dispatch.post.fetchList,
});

interface IRouteProps {
  location: {
    search?: string;
  };
}

type TProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  IRouteProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
