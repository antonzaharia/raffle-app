import React from 'react'
import CartItem from "../Cart/CartItem";

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function CartForm({cart, checkout}) {
    const renderItems = () => {
        if (cart && localStorage.cart_id) {
          return cart.cart_items_info
            .map((ci) => <CartItem key={ci.id} data={ci} /> )
        } else {
          return "Cart empty.";
        }
      };
    const handleSubmit = (event) => {
        event.preventDefault()

        checkout("data")
      }
    return (
        <Form className="right-text" onSubmit={handleSubmit}>
        {renderItems()}
        <br />
        <hr />
        <Button type="submit" variant="success">CheckOut</Button>
      </Form>
    )
}
