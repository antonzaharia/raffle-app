import React, { Component } from "react";
import { connect } from 'react-redux'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { editPost } from "../../actions/PostsActions";

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
    return <Form onSubmit={this.handleSubmit}><br/>
        <Form.Control onChange={this.handleChange} value={this.state.title} name="title" type="text" placeholder="Post Title" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.description} name="description" type="textarea" placeholder="Post Description" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.maxtickets} name="maxtickets" type="number" placeholder="Max Tickets" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.image} name="image" type="text" placeholder="Image Link" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.date} name="date" type="date" placeholder="Raffle Date" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.price} name="price" type="text" placeholder="Ticket Price" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.question} name="question" type="text" placeholder="Raffle Question" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.answer1} name="answer1" type="text" placeholder="Enter a False Answer" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.answer2} name="answer2" type="text" placeholder="Enter a False Answer" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.answer3} name="answer3" type="text" placeholder="Enter the True Answer" /><br/>
        <Button type="submit">Edit Post</Button>
    </Form>
  }
}
const mapDispatchToProps = dispatch => ({
    editPost: post => dispatch(editPost(post))
})
export default connect(null, mapDispatchToProps)(EditPostForm)