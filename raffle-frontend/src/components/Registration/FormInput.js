import React from 'react'
import Form from 'react-bootstrap/Form' 

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
