import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showPost } from '../../actions/PostsActions';
import EditPostForm from './EditPostForm';



class EditPost extends Component {
    componentDidMount() {
        this.props.showPost(this.props.match.params.postId);
    }
    render() {
        return (
            <div>
                <h3 className="center-text">Edit Post</h3>
                {this.props.post ? <EditPostForm post={this.props.post} /> : ""}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    showPost: (postId) => dispatch(showPost(postId)),
  });
const mapStateToProps = (state) => ({
    post: state.posts.post,
    requesting: state.requesting
  });
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);