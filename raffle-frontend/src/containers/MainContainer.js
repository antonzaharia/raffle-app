import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions/PostsActions";
import Post from "../components/Posts/Post";
import PostPage from "./PostPage";
import PostList from "./PostsList"
import { Route } from "react-router-dom";

class MainContainer extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    return <div className="main">
      <PostList posts={this.props.posts}/>
      <Route exact path={`/${this.props.match.url}/:postId`} render={routerProps => <PostPage {...routerProps} posts={this.props.posts}/> } />
    </div>;
  }
}


const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
});
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
