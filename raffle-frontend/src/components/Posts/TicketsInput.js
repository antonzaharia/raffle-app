import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class TicketsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.value ? this.props.value : 1
    };
  }

  render() {
    return (
      <div className="tickets-number-container">
        <span
          className="number-btn"
          onClick={() => this.state.number > 1 ? this.setState({ number: this.state.number - 1 }) : ""}
        >-</span>
        <div>
          <Form.Control
            onChange={() => this.setState({ number: this.state.number })}
            type="number"
            value={this.state.number}
          />
        </div>
        <span
          className="number-btn"
          onClick={() => this.state.number < 30 ? this.setState({ number: this.state.number + 1 }) : ""}
        >+</span>
      </div>
    );
  }
}
