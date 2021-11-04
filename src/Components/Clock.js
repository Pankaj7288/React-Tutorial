import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    date: new Date(),
    local: "en-US",
  };

  tick () {
    this.setState({ date: new Date() });
  }
  componentDidMount(){
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount()  {
    clearInterval(this.clockTimer);
  };

  clickHandle = () => {
    this.setState({ local: this.state.local === "en-US" ? "bn-BD" : "en-US" });

  };

  render() {
    const { date, local } = this.state;
    return (
      <div>
        <h1>
          The Courrent Time is <span>{date.toLocaleTimeString(local)}</span>
        </h1>
        <button onClick={this.clickHandle}>Click Me!</button>
      </div>
    );
  }
}
