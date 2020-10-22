import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./containers/Registration/Header";
import Footer from "./containers/Footer";
import MainContainer from "./containers/MainContainer";
import CartContainer from "./containers/CartContainer"

import PostPage from "./components/Posts/PostPage";
import AccountContainer from "./containers/AccountContainer";
import Container from "react-bootstrap/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header user={this.props.user} />
          <Container>
            <div>
              <Route exact path="/" render={ routerProps => <MainContainer {...routerProps} />}/>
              <Route exact path="/account">
                {localStorage.name ? <AccountContainer /> : <Redirect to="/" /> }
              </Route>
              <Route exact path="/cart">
                {localStorage.cart_id ? <CartContainer /> : <Redirect to="/" /> }
              </Route>
              <Route path={`/posts/:postId`} render={routerProps => <PostPage {...routerProps} /> } />
              
            </div>
          </Container>
          <Footer />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.users.user
});

export default connect(mapStateToProps)(App);
