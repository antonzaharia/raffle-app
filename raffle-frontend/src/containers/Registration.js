import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import Button from 'react-bootstrap/Button'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: false,
            signupForm: false
        }
    }
    
    loadForm = () => {
        if(this.state.loginForm){
            return <LoginForm />
        } else if(this.state.signupForm) {
            return <SignupForm />
        }
    }
    showLogin = (event) => {
        this.setState({
            loginForm: !this.state.loginForm,
            signupForm: false
        })
        this.state.loginForm ? event.target.textContent = "Login" : event.target.textContent = "X" 
    }
    showSignup = (event) => {
        this.setState({
            loginForm: false,
            signupForm: !this.state.signupForm
        })
        this.state.signupForm ? event.target.textContent = "Signup" : event.target.textContent = "X" 
    }
    render() {
        return (
            <div className="right-text">
                <Button onClick={this.showLogin}>Login</Button>
                <Button onClick={this.showSignup}>Signup</Button>
                {this.loadForm()}
            </div>
        )
    }
}
