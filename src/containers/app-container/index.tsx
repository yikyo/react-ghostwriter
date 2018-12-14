import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Footer, Header } from '../../components';
import { AppService } from '../../services';
import { TDispatch, TRootState } from '../../store';

import './style.scss';

class AppContainer extends React.Component<TProps, IState> {
  public state = {
    isInit: false,
  };

  public componentDidMount() {
    const { fetchSiteData, fetchSiteNavs } = this.props;

    fetchSiteData();

    fetchSiteNavs();

    AppService.initAxios();

    this.setState({
      isInit: true,
    });
  }

  public render() {
    const { isInit } = this.state;
    const { title, navs, children } = this.props;

    if (!isInit) {
      return null;
    }

    return (
      <Fragment>
        <Header title={title} navs={navs} />
        <main>{children}</main>
        <Footer title={title} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: TRootState) => ({
  navs: state.site.navs,
  title: state.site.title,
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  fetchSiteData: dispatch.site.fetchSiteData,
  fetchSiteNavs: dispatch.site.fetchSiteNavs,
});

type TProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

interface IState {
  isInit: boolean;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
