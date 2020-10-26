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
import Admin from "./containers/Admin/Admin";
import NewPost from "./components/Posts/NewPost";
import EditPost from "./components/Posts/EditPost";

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
              <Route exact path={`/posts/:postId`} render={routerProps => <PostPage {...routerProps} /> } />
              <Route exact path={"/admin"} ><Admin /></Route>
              <Route path={"/admin/posts/new"}><NewPost /></Route>
              <Route exact path={`/posts/:postId/edit`} render={routerProps => <EditPost {...routerProps} /> } />
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
  // posts: state.posts.posts
});

export default connect(mapStateToProps)(App);
