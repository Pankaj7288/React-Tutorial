import React, { Component } from "react";

export default class Clock extends Component {
  state = { date: new Date() };

  tick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>
          The Courrent Time is <span>{date.toLocaleTimeString()}</span>
        </h1>
      </div>
    );
  }
}
