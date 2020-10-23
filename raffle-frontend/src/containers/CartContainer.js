import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCart, checkout } from "../actions/CartActions";
import CartForm from "../components/Cart/CartForm"

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";


class CartContainer extends Component {
  componentDidMount() {
    if (localStorage.cart_id) {
      this.props.loadCart(localStorage.cart_id);
    }
  }
  
  render() {
    return (
      <Card style={{ width: "100%" }}>
        {this.props.requesting ? <p>Loading cart...</p> : ""}
        <ListGroup variant="flush">
          <div className="cart-item cart-item-header">
            <Badge variant="primary" className="cart-badge-pill">Post</Badge>
            <Badge variant="primary" className="cart-badge-pill">Tickets</Badge>
            <Badge variant="primary" className="cart-badge-pill">Answer</Badge>
            <Badge variant="primary" className="cart-badge-pill">Price</Badge>
            <Badge variant="primary" className="cart-badge-pill">Remove</Badge>
          </div>
          <CartForm cart={this.props.cart} checkout={this.props.checkout}/>
        </ListGroup>
        {this.props.cart ? <h3 className="center-text">Total: ${this.props.cart.total}</h3> : ""}
      </Card>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadCart: (cartId) => dispatch(loadCart(cartId)),
  checkout: data => dispatch(checkout(data))
});
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  requesting: state.cart.requesting,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
