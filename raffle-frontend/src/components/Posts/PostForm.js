import AnswerInput from "./AnswerInput";
import TicketsInput from "./TicketsInput";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import React, { Component } from "react";

export default class PostForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const answers = [event.target[0], event.target[1], event.target[2]];
    const numberOfTickets = event.target[3].value
    const selectedAnswer = answers.find((answer) => answer.checked);
    if (selectedAnswer && localStorage.email) {
      console.log(selectedAnswer.id, numberOfTickets);
    } else if(!localStorage.email) {
      alert("You must be logged in!")
    } else {
      alert("You must select an answer!")
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Card.Header>
            <h4>{this.props.question}</h4>
          </Card.Header>
          <AnswerInput answers={this.props.answers} />
          <p>How Many Tickets?</p>
          <TicketsInput />
          <Button type="submit" variant="primary">
            Add to cart
          </Button>
        </Form>

      </div>
    );
  }
}
