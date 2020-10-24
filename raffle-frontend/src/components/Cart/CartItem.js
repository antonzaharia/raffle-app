import React, { Component } from "react";
import { connect } from "react-redux"
import { deleteCartItem } from "../../actions/CartActions"
import TicketsInput from "../../components/Ticket/TicketsInput"

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


class CartItem extends Component {
  render() {
    return (
      <ListGroup.Item variant="primary">
        <div className="cart-item">
          <div className="cart-data">
          <p className="cart-badge-pill">Raffle title: <b>{this.props.data.post.title}</b></p>
          <p className="cart-badge-pill">Your answer: <b>{this.props.data.answer.content}</b></p>
          <p className="cart-badge-pill">Price per ticket: <b>${this.props.data.price}</b></p>
          </div>
          <Button className="cart-delete-btn" variant="danger" onClick={ () => this.props.deleteCartItem(this.props.data.id) }>Delete</Button>
          <div className="cart-input"><TicketsInput value={parseInt(this.props.data.quantity)}/></div>
        </div>
        
      </ListGroup.Item>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: id => dispatch(deleteCartItem(id))
})
export default connect(null, mapDispatchToProps)(CartItem)