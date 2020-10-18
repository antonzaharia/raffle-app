import React, { Component } from "react";
import { CookiesProvider } from "react-cookie";
import { withCookies } from 'react-cookie';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./containers/Footer";
import MainComponent from "./containers/MainComponent";
import AccountContainer from "./containers/AccountContainer";
import Container from "react-bootstrap/Container";

class App extends Component {
  render() {
    return (
      <div>
        <CookiesProvider>
          <Router>
            <Header signUp={this.props.signUp} login={this.props.login} />
            <Container>
              <div>
                <Route exact path="/" render={()=> (<MainComponent cookies={this.props.cookies} />)} />
                <Route path="/account" component={()=> (<AccountContainer cookies={this.props.cookies} />)} />
              </div>
            </Container>
            <Footer />
          </Router>
        </CookiesProvider>
      </div>
    );
  }
}

export default withCookies(App);
