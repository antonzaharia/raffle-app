import React from 'react'

import AnswerInput from "./AnswerInput"
import TicketsInput from "./TicketsInput"

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function PostForm(props) {
    return (
        <Form>
        <Card.Header>
          <h4>{props.question}</h4>
        </Card.Header>
        <AnswerInput answers={props.answers}/>
        <p>How Many Tickets?</p>
        <TicketsInput />
        <Button variant="primary">Add to cart</Button>
      </Form>
    )
}
