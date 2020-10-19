import React, { Component } from "react";
import { connect } from 'react-redux'
import { loadPosts } from '../actions/PostsActions'
import Post from '../components/Posts/Post'

class MainComponent extends Component {
  componentDidMount() {
    this.props.loadPosts()
  }
  renderPosts = () => {
      return(this.props.posts.map( post => <Post key={post.id} post={post}/>))
  }
  render() {
    return <div className="main">
        {this.renderPosts()}
    </div>;
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
});
const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
