import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/UserActions";
import Error from "./Error"

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let user = { email: this.state.email, password: this.state.password };
    this.props.login(user);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} className="float-right">
          <h2 className="center-text">Login</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button type="submit" className="center-text">
              Done <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Form>
          {this.props.requesting ? <FontAwesomeIcon icon={faSpinner} className="spinner" /> : null }
          <Error errors={this.props.errors} />
        </Card>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});
const mapStateToProps = (state) => ({
  requesting: state.requesting,
  errors: state.errors
});
export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
