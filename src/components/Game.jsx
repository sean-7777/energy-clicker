import React, { Component } from 'react';
import Title from './Title';
//import Upgrade from './Upgrade';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { stats: { energy: 0 } };
  }

  render() {
    return (
      <div className="Game">
        <Title />
        {/*<Upgrade />*/}
      </div>
    );
  }
}
