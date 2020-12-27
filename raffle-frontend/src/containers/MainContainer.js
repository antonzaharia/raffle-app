import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loadPosts } from "../actions/PostsActions";
import PostList from "../components/Posts/PostsList";
import Loading from "../components/Loading";
import DateCheck from "../components/Raffle/DateCheck";

// Bootstrap
import Card from "react-bootstrap/esm/Card";

class MainContainer extends Component {
  componentDidMount() {
    this.props.loadPosts();
    this.props.loadNotifications();
  }
  checkUser = () => {
    if (localStorage.admin === "true") {
      // Redirecting to admin if user is admin
      return <Redirect to="/admin" />;
    } else {
      // Rendering slider and posts
      return (
        <div className="main">
          {this.props.requesting ? <Loading /> : ""}
          <DateCheck posts={this.props.posts} />
          <br />
          <hr />
          <br />
          <Card body className="center-text bold-text" bg="danger" text="light">
            CURRENT COMPETITIONS
          </Card>
          <br />
          <hr />
          <br />

          {this.props.requesting ? <Loading /> : ""}
          <PostList posts={this.props.posts} />
        </div>
      );
    }
  };

  render() {
    return <div>{this.checkUser()}</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
  loadNotifications: () => dispatch({ type: "LOAD_NOTIFICATIONS" }),
});
const mapStateToProps = (state) => ({
  user: state.users.user,
  posts: state.posts.posts,
  requesting: state.posts.requesting,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
