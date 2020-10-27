import React, { Component } from "react";
import { connect } from 'react-redux'
import SignupForm from "../../components/Registration/SignupForm";
import LoginForm from "../../components/Registration/LoginForm";

// Bootstrap
import Button from "react-bootstrap/Button";
import { removeErrors } from "../../actions/UserActions";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: "Login",
      signupForm: "Signup",
    };
  }
  closeForm = () => {
    this.props.removeErrors()
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
      this.props.removeErrors()
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
        this.props.removeErrors()
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
const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors())
})
export default connect(null, mapDispatchToProps)(Registration)