import React, { Component } from "react";
import { connect } from 'react-redux'

import { editPost } from "../../actions/PostsActions";
import NewEditForm from "./NewEditForm";

class EditPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post.title,
            description: props.post.description,
            maxtickets: props.post.max,
            image: props.post.image,
            date: props.post.date,
            price: props.post.price,
            question: props.post.question.content,
            answer1: props.post.answers[0][0].content,
            answer2: props.post.answers[0][1].content,
            answer3: props.post.answers[0][2].content
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const post = {
            id: this.props.post.id,
            title: this.state.title,
            description: this.state.description,
            max_tickets: this.state.maxtickets,
            image: this.state.image,
            date: this.state.date,
            price: this.state.price,
            question_id: this.props.post.question.id,
            question: this.state.question,
            answer1: this.state.answer1,
            answer1_id: this.props.post.answers[0][0].id,
            answer2: this.state.answer2,
            answer2_id: this.props.post.answers[0][1].id,
            answer3: this.state.answer3,
            answer3_id: this.props.post.answers[0][2].id
        }
        this.props.editPost(post)
    }
    
  render() {
    return <><NewEditForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/></>
  }
}
const mapDispatchToProps = dispatch => ({
    editPost: post => dispatch(editPost(post))
})
export default connect(null, mapDispatchToProps)(EditPostForm)