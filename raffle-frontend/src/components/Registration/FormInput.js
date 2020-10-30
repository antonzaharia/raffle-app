import React from 'react'

//Bootstrap
import Form from 'react-bootstrap/Form' 

// Renders an input field for the login/signup form
export default function FormInput({data, handleChange, value}) {
    const makePlaceholder = data => {
        return `Enter your ${data}`
    }
    return (
        <Form.Group className="reg-form-index" name={data}>
            <Form.Control
                onChange={handleChange}
                value={value}
                name={data}
                type={data === "name" ? "text" : data}
                placeholder={makePlaceholder(data)}
            />
        </Form.Group>
    )
}
