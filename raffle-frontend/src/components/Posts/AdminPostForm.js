import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button" 
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { makeLink } from "../../helpers/helpers";

class AdminPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title : "",
            description: props.post ? props.post.description : "",
            max_tickets: props.post ? props.post.max_tickets : "",
            image: props.post ? props.post.image : "",
            date: props.post ? props.post.date : "",
            price: props.post ? props.post.price : "",
            question: props.post ? props.post.question.content : "",
            answer1: props.post ? props.post.answers[0][0].content : "",
            answer2: props.post ? props.post.answers[0][1].content : "",
            answer3: props.post ? props.post.answers[0][2].content : "",
            redirect: false
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const post = {
            id: this.props.post ? this.props.post.id : "",
            title: this.state.title,
            description: this.state.description,
            max_tickets: this.state.max_tickets,
            image: this.state.image,
            date: this.state.date,
            price: this.state.price,
            question_id: this.props.post ? this.props.post.question.id : "",
            question: this.props.post ? this.state.question : "",
            answer1: this.state.answer1,
            answer1_id: this.props.post ? this.props.post.answers[0][0].id : "",
            answer2: this.state.answer2,
            answer2_id: this.props.post ? this.props.post.answers[0][1].id : "",
            answer3: this.state.answer3,
            answer3_id: this.props.post ? this.props.post.answers[0][2].id : ""
        }
        this.props.handleSubmit(post)
        this.setState({ redirect: true })
    }
    redirect = () => {
        if(this.props.post) {
            return <Redirect to={makeLink(this.props.post.id)} />
        } else {
            return <Redirect to="/" />
        }
    }
    
    render() {
        return (
            <>
            <Form onSubmit={this.handleSubmit}><br/>
            {console.log(this.props.post)}
                <Form.Control onChange={this.handleChange} value={this.state.title} name="title" type="text" placeholder="Post Title" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.description} name="description" type="textarea" placeholder="Post Description" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.max_tickets} name="max_tickets" type="number" placeholder="Max Tickets" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.image} name="image" type="text" placeholder="Image Link" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.date} name="date" type="date" placeholder="Raffle Date" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.price} name="price" type="text" placeholder="Ticket Price" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.question} name="question" type="text" placeholder="Raffle Question" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.answer1} name="answer1" type="text" placeholder="Enter a False Answer" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.answer2} name="answer2" type="text" placeholder="Enter a False Answer" /><br/>
                <Form.Control onChange={this.handleChange} value={this.state.answer3} name="answer3" type="text" placeholder="Enter the True Answer" /><br/>
                <Button type="submit">Submit</Button>
            </Form>
            {this.state.redirect ? this.redirect() : ""}
            </>
        )
    }
}
export default AdminPostForm
