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
  closeForm = () => {
    this.setState({
        loginForm: "Login",
        signupForm: "Signup",
      });
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
      this.closeForm()
    }
  };
  showSignup = () => {
    if (this.state.signupForm === "Signup") {
        this.setState({
          loginForm: "Login",
          signupForm: "X",
        });
      } else {
        this.closeForm()
      }
  };
  render() {
    return (
      <div className="right-text">
        <Button className="header-btn" onClick={this.showLogin}>{this.state.loginForm}</Button>
        <Button className="header-btn" onClick={this.showSignup}>{this.state.signupForm}</Button>
        {this.loadForm()}
      </div>
    );
  }
}
