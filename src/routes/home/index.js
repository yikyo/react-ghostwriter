import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      name: 'home',
    };
  }

  render() {
    const { name } = this.state;
    return <div>{name}</div>;
  }
}

export default Home;
