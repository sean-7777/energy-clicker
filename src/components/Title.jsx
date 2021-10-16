import React, { Component } from 'react';
import '../styles/Title.less';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { typed: '' };
  }

  #toType = 'Energy Clicker';

  componentDidMount() {
    this.typeInterval = setInterval(() => {
      const newTyped = this.#toType.replace(this.state.typed, '')[0];
      this.setState({
        typed: `${this.state.typed}${newTyped}`,
      });
      if (this.state.typed === this.#toType) clearInterval(this.typeInterval);
    }, 350);
  }

  render() {
    return <h1 className="title">{this.state.typed}</h1>;
  }
}
