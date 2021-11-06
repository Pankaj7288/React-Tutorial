import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const {change, local, show} = this.props;
        return (
          <div>
            <button type="button" onClick={() => change(local)}>
              {local === "en-US" ? "আমাকে ক্লিক করুন" : "Click Me!"}
            </button>
            {show ? <p>Hello English</p> : <p>বাংলা</p>}
          </div>
        );
    }
}
