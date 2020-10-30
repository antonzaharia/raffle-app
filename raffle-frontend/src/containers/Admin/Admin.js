import React, { Component } from "react";
import { connect } from "react-redux";

import { loadPosts } from "../../actions/PostsActions";
import AdminPostContainer from "./AdminPostContainer";

// Bootstrap
import Card from "react-bootstrap/esm/Card";

// Renders only if user is admin
class Admin extends Component {
  componentDidMount () {
    this.props.loadPosts();
  }
  render() {
    return (
      <div className="main">
        <h3 className="center-text">Admin Dashboard</h3>
        <Card><AdminPostContainer posts={this.props.posts}/></Card>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
});
const mapStateToProps = state => ({
  posts: state.posts.posts
})
export default connect(mapStateToProps, mapDispatchToProps)(Admin)