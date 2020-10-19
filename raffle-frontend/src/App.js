import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./containers/Registration/Header";
import Footer from "./containers/Footer";
import MainComponent from "./containers/MainComponent";
import AccountContainer from "./containers/AccountContainer";
import Container from "react-bootstrap/Container";

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <Header user={this.props.user}/>
            <Container>
              <div>
                <Route exact path="/" render={() => (<MainComponent />)} />
                <Route path="/account" render={()=> (<AccountContainer />)} />
              </div>
            </Container>
            <Footer />
          </Router>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App);
