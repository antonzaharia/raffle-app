import React, { Component } from "react";
import { connect } from "react-redux"
import { deleteCartItem } from "../../actions/CartActions"

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
          <Button variant="danger" onClick={ () => this.props.deleteCartItem(this.props.data.id) }>X</Button>
        </div>
        
      </ListGroup.Item>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: id => dispatch(deleteCartItem(id))
})
export default connect(null, mapDispatchToProps)(CartItem)