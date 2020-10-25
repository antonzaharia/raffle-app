import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

export default class NewPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            maxtickets: "",
            image: ""
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
  render() {
    return <Form><br/>
        <Form.Control onChange={this.handleChange} value={this.state.title} name="title" type="text" placeholder="Post Title" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.description} name="description" type="textarea" placeholder="Post Description" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.maxtickets} name="maxtickets" type="number" placeholder="Max Tickets" /><br/>
        <Form.Control onChange={this.handleChange} value={this.state.image} name="image" type="text" placeholder="Image Link" /><br/>
        <Button type="submit">Create Post</Button>
    </Form>
  }
}
