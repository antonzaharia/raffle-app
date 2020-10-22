import React, { Component } from "react";


import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

class CartItem extends Component {
  render() {
    return (
      <ListGroup.Item variant="dark">
        <div className="cart-item">
          <p className="cart-badge-pill">{this.props.data.post.title}</p>
          <p className="cart-badge-pill">{this.props.data.quantity}</p>
          <p className="cart-badge-pill">{this.props.data.answer.content}</p>
          <p className="cart-badge-pill">${this.props.data.price}</p>
          <Button variant="danger">X</Button>
        </div>
        
      </ListGroup.Item>
    );
  }
}
export default CartItem