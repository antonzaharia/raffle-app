import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import { newPost } from "../../actions/PostsActions";
import { makeLink } from "../../helpers/helpers";
import AdminPostForm from "./AdminPostForm";

class NewPostForm extends Component { 

  render() {
    return <>
    <h3>Creat New Post</h3>
    <AdminPostForm handleSubmit={this.props.newPost} />
    {/* {this.state.redirect? <Redirect to="/admin" /> : ""} */}
    </>
  }
}
const mapDispatchToProps = dispatch => ({
    newPost: post => dispatch(newPost(post))
})
export default connect(null, mapDispatchToProps)(NewPostForm)