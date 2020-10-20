import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions/PostsActions";
import PostList from "./PostsList"

class MainContainer extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    return <div className="main">
      <PostList posts={this.props.posts}/>
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
