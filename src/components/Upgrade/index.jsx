import React, { Component } from 'react';
import Upgrade from './Upgrade';
import '../../styles/Upgrade/Upgrades.less';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  #upgrades = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500,
  };

  render() {
    const upgrades = [];
    for (const upgrade in this.#upgrades) {
      upgrades.push(<Upgrade name={upgrade} price={this.#upgrades[upgrade]} />);
    }
    return <div className="upgrades">{upgrades}</div>;
  }
}
