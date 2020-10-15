import React, { Component } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import Button from "react-bootstrap/Button";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: "Login",
      signupForm: "Signup",
    };
  }

  loadForm = () => {
    if (this.state.loginForm === "X") {
      return <LoginForm />;
    } else if (this.state.signupForm === "X") {
      return <SignupForm />;
    }
  };
  showLogin = () => {
    if (this.state.loginForm === "Login") {
      this.setState({
        loginForm: "X",
        signupForm: "Signup",
      });
    } else {
      this.setState({
        loginForm: "Login",
        signupForm: "Signup",
      });
    }
  };
  showSignup = () => {
    if (this.state.signupForm === "Signup") {
        this.setState({
          loginForm: "Login",
          signupForm: "X",
        });
      } else {
        this.setState({
          loginForm: "Login",
          signupForm: "Signup",
        });
      }
  };
  render() {
    return (
      <div className="right-text">
        <Button onClick={this.showLogin}>{this.state.loginForm}</Button>
        <Button onClick={this.showSignup}>{this.state.signupForm}</Button>
        {this.loadForm()}
      </div>
    );
  }
}
