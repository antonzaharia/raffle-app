import React, { Component } from "react";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class signupForm extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem'}} className="float-right">
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter your password" />
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
