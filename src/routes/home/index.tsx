import React from 'react';
import { connect } from 'react-redux';

import { TDispatch, TRootState } from '../../store';

class Home extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchServerTime();
  }

  public render() {
    const { serverTime } = this.props;

    return <h1>hello world server time: {serverTime}</h1>;
  }
}

const mapStateToProps = (state: TRootState) => ({
  serverTime: state.serverTime,
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  fetchServerTime: dispatch.serverTime.fetch,
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
