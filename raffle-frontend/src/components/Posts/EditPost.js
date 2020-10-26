import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showPost } from '../../actions/PostsActions';
import AdminPostForm from './AdminPostForm';
import { editPost } from "../../actions/PostsActions";

class EditPost extends Component {
    componentDidMount() {
        this.props.showPost(this.props.match.params.postId);
    }
    render() {
        return (
            <div>
                <h3 className="center-text">Edit Post</h3>
                {this.props.post ? <AdminPostForm handleSubmit={this.props.editPost} post={this.props.post} /> : ""}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    showPost: (postId) => dispatch(showPost(postId)),
    editPost: post => dispatch(editPost(post))
  });
const mapStateToProps = (state) => ({
    post: state.posts.post,
    requesting: state.requesting
  });
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);