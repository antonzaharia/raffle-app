import React from 'react'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function NewEditForm({handleSubmit ,handleChange, state}) {
    return (
        <Form onSubmit={handleSubmit}><br/>
        <Form.Control onChange={handleChange} value={state.title} name="title" type="text" placeholder="Post Title" /><br/>
        <Form.Control onChange={handleChange} value={state.description} name="description" type="textarea" placeholder="Post Description" /><br/>
        <Form.Control onChange={handleChange} value={state.maxtickets} name="maxtickets" type="number" placeholder="Max Tickets" /><br/>
        <Form.Control onChange={handleChange} value={state.image} name="image" type="text" placeholder="Image Link" /><br/>
        <Form.Control onChange={handleChange} value={state.date} name="date" type="date" placeholder="Raffle Date" /><br/>
        <Form.Control onChange={handleChange} value={state.price} name="price" type="text" placeholder="Ticket Price" /><br/>
        <Form.Control onChange={handleChange} value={state.question} name="question" type="text" placeholder="Raffle Question" /><br/>
        <Form.Control onChange={handleChange} value={state.answer1} name="answer1" type="text" placeholder="Enter a False Answer" /><br/>
        <Form.Control onChange={handleChange} value={state.answer2} name="answer2" type="text" placeholder="Enter a False Answer" /><br/>
        <Form.Control onChange={handleChange} value={state.answer3} name="answer3" type="text" placeholder="Enter the True Answer" /><br/>
        <Button type="submit">Edit Post</Button>
    </Form>
    )
}
