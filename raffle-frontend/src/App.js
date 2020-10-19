import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./containers/Registration/Header";
import Footer from "./containers/Footer";
import MainContainer from "./containers/MainContainer";
import AccountContainer from "./containers/AccountContainer";
import Container from "react-bootstrap/Container";
import PostPage from "./containers/PostPage"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header user={this.props.user} />
          <Container>
            <div>
              <Route exact path="/" render={() => <MainContainer />} />
              <Route exact path="/account">
                {localStorage.name ? <AccountContainer /> : <Redirect to="/" /> }
              </Route>
              <Route exact path="/posts" render={ routerProps => <MainContainer {...routerProps} />}/>
            </div>
          </Container>
          <Footer />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default connect(mapStateToProps)(App);
