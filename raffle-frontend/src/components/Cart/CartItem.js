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
          <p className="cart-badge-pill">Raffle title: {this.props.data.post.title}</p>
          <p className="cart-badge-pill">Your answer: {this.props.data.answer.content}</p>
          <p className="cart-badge-pill">Price per ticket: ${this.props.data.price}</p>
          </div>
          <Button variant="danger" onClick={ () => this.props.deleteCartItem(this.props.data.id) }>Delete</Button>
          <div className="cart-delete-btn"><TicketsInput value={parseInt(this.props.data.quantity)}/></div>
        </div>
        
      </ListGroup.Item>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: id => dispatch(deleteCartItem(id))
})
export default connect(null, mapDispatchToProps)(CartItem)