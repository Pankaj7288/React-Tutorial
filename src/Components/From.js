import React, { Component } from "react";

export default class From extends Component {
  state = {
    firstName: "",
    lastName: "",
    discription: "",
    checkbox: "checked",
    SelectOne: "One",
    print:"",
  };
  handleChange = (event) => {
    const target = event.target;
    let value;
    if (target.type === "checkbox") {
      value = target.checked;
    } else if (target.type === "select") {
      value = target.SelectOne;
    } else if (target.type === "text") {
      value = target.value;
    } else if (target.type === "placeholder") {
      value = target.value;
    }
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  clickOnSubmit = (event) => {
    const { firstName, lastName, discription, SelectOne } =
      this.state;
    event.preventDefault();
    this.setState({
      print: `Name: ${firstName} ${lastName} 
        Biodata: ${discription} 
        You Select: ${SelectOne}`,
    });
  };
  render() {
    const { firstName, lastName, discription, checkbox, SelectOne, print } =
      this.state;
    return (
      <div>
        <form onSubmit={this.clickOnSubmit}>
          <input
            name="firstName"
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            value={lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="placeholder"
            value={discription}
            name="discription"
            placeholder="Discribed Yourself"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="checkbox"
            value={checkbox}
            name="checkbok"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <select
            name="SelectOne"
            value={SelectOne}
            onChange={this.handleChange}
          >
            <option value="One">One</option>
            <option value="Two">TWO</option>
            <option value="Three">Three</option>
          </select>
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
        <p>{print}</p>
      </div>
    );
  }
}
