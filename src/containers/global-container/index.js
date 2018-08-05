import React, { Component } from 'react';
import axios from 'axios';

class GlobalContainer extends Component {
  componentDidMount() {
    this.initAxios();
  }

  initAxios = () => {
    axios.interceptors.request.use(config => {
      console.log(config);
    });
  };

  render() {
    return this.props.children;
  }
}

export default GlobalContainer;
