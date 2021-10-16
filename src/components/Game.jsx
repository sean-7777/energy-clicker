import React, { Component } from 'react';
import Title from './Title';
import Energy from './Energy';
import Upgrades from './Upgrade';
import '../styles/Game.less';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { stats: { energy: 0 } };
  }

  render() {
    return (
      <>
        <Title />
        <div className="game">
          <Energy />
          <Upgrades />
        </div>
      </>
    );
  }
}
