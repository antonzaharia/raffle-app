import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/UserActions";
import Error from "../Error"

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import FormInput from "./FormInput";

class signupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordLengthCheck: false
    };
  }
  handleChange = (event) => {
    if(this.state.password.length <= 4) {
      this.setState({passwordLengthCheck: true})
    } else {
      this.setState({passwordLengthCheck: false})
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signUp(user);
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <Card style={{ width: "100%" }} className="float-right">
          <h2 className="center-text">Signup</h2>
          <Form onSubmit={this.handleSubmit} className="reg-form">

            <FormInput data="name" handleChange={this.handleChange} value={this.state.name}/>
            <FormInput data="email" handleChange={this.handleChange} value={this.state.email}/>
            <FormInput data="password" handleChange={this.handleChange} value={this.state.password}/>

            {/* Checking password Length */}
            {this.state.passwordLengthCheck ? <p className="center-text red">The password must contain at least 6 characters</p> : ""}

            <Button type="submit" className="center-text reg-form-index">
              Done <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Form>

          {/* Spinner element while accessing backend */}
          {this.props.requesting ? <FontAwesomeIcon icon={faSpinner} className="spinner" /> : null }
          
          <Error errors={this.props.errors} />
        </Card>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});
const mapStateToProps = state => ({
  requesting: state.users.requesting,
  errors: state.users.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(signupForm);
