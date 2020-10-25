import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import { newPost } from "../../actions/PostsActions";
import { makeLink } from "../../helpers/helpers";
import NewEditForm from "./NewEditForm";

class NewPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            max_tickets: "",
            image: "",
            date: "",
            price: "",
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            redirect: false
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const post = {
            title: this.state.title,
            description: this.state.description,
            max_tickets: this.state.max_tickets,
            image: this.state.image,
            date: this.state.date,
            price: this.state.price,
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer3: this.state.answer3
        }
        this.props.newPost(post)
        this.setState({redirect: true})
    }
    
  render() {
    return <>
    <NewEditForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
    {this.state.redirect? <Redirect to="/admin" /> : ""}
    </>
  }
}
const mapDispatchToProps = dispatch => ({
    newPost: post => dispatch(newPost(post))
})
export default connect(null, mapDispatchToProps)(NewPostForm)