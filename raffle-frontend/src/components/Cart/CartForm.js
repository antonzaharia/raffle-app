import React from 'react'
import { connect } from 'react-redux'
import CartItem from "../Cart/CartItem";

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Message from '../Message';

function CartForm({cart, checkout, message}) {

    const renderItems = () => {
        if (cart && cart.cart_items_info.length > 0 && localStorage.cart_id) {
          return cart.cart_items_info
            .map((ci) => <CartItem key={ci.id} data={ci} /> )
        } else {
          return <div className="center-text"><br />Cart empty.</div>;
        }
      };
    const handleSubmit = (event) => {
        event.preventDefault()
        const getQuantities = Object.keys(event.target).map( t => event.target[t].type === "number" ? parseInt(event.target[t].value) : "")
        const newQuantities = getQuantities.filter( o => o !== "")
        const data = {
            user_id: localStorage.id,
            cart_id: cart.id,
            quantities: [...newQuantities]
        }
        checkout(data)
      }
    return (
      <Form className="right-text" onSubmit={handleSubmit}>
        {renderItems()}
        <br />
        <hr />
        {cart && cart.cart_items_info.length > 0 ? <Button type="submit" variant="success">CheckOut</Button> : ""}
        <Message data={message} />
      </Form>
    )
}
const mapStateToProps = state => ({
  message: state.cart.message
})
export default connect(mapStateToProps)(CartForm)