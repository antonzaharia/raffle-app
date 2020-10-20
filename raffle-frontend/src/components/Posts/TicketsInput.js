import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class TicketsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }

  render() {
    return (
      <div className="tickets-number-container">
        <a
          className="number-btn"
          onClick={() => this.setState({ number: this.state.number - 1 })}
        >
          -
        </a>
        <div className="tickets-number">
          <Form.Control
          onChange={() => this.setState({ number: this.state.number })}
            type="number"
            value={this.state.number}
            min="1"
            max="30"
          />
        </div>
        <a
          className="number-btn"
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          +
        </a>
      </div>
    );
  }
}
