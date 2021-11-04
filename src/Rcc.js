import React, { Component } from "react";

export default class Rcc extends Component {
  render() {
    const {spouseName} = this.props;
    return (
      <div>
        <h2>Hello {spouseName}</h2>
      </div>
    );
  }
}
