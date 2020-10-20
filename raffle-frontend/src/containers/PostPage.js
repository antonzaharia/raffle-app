import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showPost } from '../actions/PostsActions'

class PostPage extends Component {
    componentDidMount() {
        this.props.showPost(this.props.match.params.postId)
    }
    render() {
        return (
            <div>
                {console.log(this.props.post)}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    showPost: postId => dispatch(showPost(postId))
})
const mapStateToProps = state => ({
    post: state.posts.post
})
export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
