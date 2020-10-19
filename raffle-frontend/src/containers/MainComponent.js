import React, { Component } from "react";
import { connect } from 'react-redux'
import { loadPosts } from '../actions/PostsActions'

class MainComponent extends Component {
  componentDidMount() {
    this.props.loadPosts()
  }
  render() {
    return <div className="main">Main</div>;
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
});
const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
