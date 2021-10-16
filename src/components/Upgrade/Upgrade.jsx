import React, { Component } from 'react';
import '../../styles/Upgrade/Upgrade.less';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="upgrade">
        <span className="upgrade-name">{this.props.name}</span>
        <span className="upgrade-price">
          <span className="upgrade-ico-holder">
            <img src="/assets/energy.svg" className="upgrade-ico" />
          </span>
          {this.props.name}
        </span>
      </button>
    );
  }
}
