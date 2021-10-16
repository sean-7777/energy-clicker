import React, { Component } from 'react';
import '../styles/Energy.less';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="energy">
        <img src="/assets/energy.svg" className="energy-click" />
      </div>
    );
  }
}
