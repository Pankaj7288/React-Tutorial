import React, { Component } from "react";
import Button from "./Button";

export default class Clock extends Component {
  state = {
    date: new Date(),
    local: "en-US",
  };

  tick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  clickHandle = (local) => {
    this.setState({ local });
  };

  render() {
    const { date, local } = this.state;
    return (
      <div>
        <h1>
          {local === "en-US" ? "The Current Time is" : "বর্তমান সময় হল "}: <span>{date.toLocaleTimeString(local)}</span>
        </h1>
        <Button
          change={this.clickHandle}
          local={local === "en-US" ? "bn-BD" : "en-US"}
          show={local === "en-US" ? true : false}
        />
      </div>
    );
  }
}
