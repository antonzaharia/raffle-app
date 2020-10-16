import React, { Component } from "react";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class signupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((resp) => resp.json())
        .then((result) => {
          if('errors' in result){
            for(const error in result.errors){
              console.log(error, result.errors[error][0])
            }
          } else {
            this.props.signUp(result)
          }
        });
    
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }
  
  render() {
    return (
      <div>
        <Card style={{ width: '18rem'}} className="float-right">
          <h2 className="center-text">Signup</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicText">
              <Form.Control onChange={this.handleChange} value={this.state.name} name="name" type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control onChange={this.handleChange} value={this.state.email} name="email" type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control onChange={this.handleChange} value={this.state.password} name="password" type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button type="submit" className="center-text">
              Done <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
