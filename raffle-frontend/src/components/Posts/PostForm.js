import React, { Component } from "react";
import { connect } from "react-redux"

import AnswerInput from "./AnswerInput";
import TicketsInput from "../Ticket/TicketsInput";
import { newCartItem } from "../../actions/CartActions"
import { Redirect } from "react-router-dom";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { formSent: false }
  }
  renderRedirect = () => this.state.formSent ? <Redirect to="/cart" /> : ""
  
  handleSubmit = (event) => {
    event.preventDefault();
    const answers = [event.target[0], event.target[1], event.target[2]];
    const numberOfTickets = event.target[3].value
    const selectedAnswer = answers.find((answer) => answer.checked);
    if (selectedAnswer && localStorage.id) {
      const data = {
        user_id: localStorage.id,
        answer_id: selectedAnswer.id,
        post_id: this.props.post_id,
        numberOfTickets
      }
      this.props.newCartItem(data)
      
    } else if(!localStorage.id) {
      alert("You must be logged in!")
    } else {
      alert("You must select an answer!")
    }
    this.setState({formSent: true})
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
        {this.renderRedirect()}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  newCartItem: data => dispatch(newCartItem(data))
})
const mapStateToProps = state => ({
  post_id: state.posts.post.id
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
