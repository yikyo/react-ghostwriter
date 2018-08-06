import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  componentDidMount() {
    this.initAxios();
  }

  initAxios = () => {
    axios.interceptors.request.use(config => {
      console.log(config);
    });
  };

  render() {
    const { children } = this.props;
    return children;
  }
}

export default AppContainer;
