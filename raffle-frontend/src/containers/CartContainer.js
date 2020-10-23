import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCart } from "../actions/CartActions";
import CartItem from "../components/Cart/CartItem";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class CartContainer extends Component {
  componentDidMount() {
    if (localStorage.cart_id) {
      this.props.loadCart(localStorage.cart_id);
    }
  }
  renderItems = () => {
    if (this.props.cart && localStorage.cart_id) {
      return this.props.cart.cart_items_info
        .map((ci) => <CartItem key={ci.id} data={ci} /> )
    } else {
      return "Cart empty.";
    }
  };
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
          <Form className="right-text">
            {this.renderItems()}
            <br />
            <hr />
            <Button variant="success">CheckOut</Button>
          </Form>
        </ListGroup>
        {this.props.cart ? <h3 className="center-text">Total: ${this.props.cart.total}</h3> : ""}
      </Card>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadCart: (cartId) => dispatch(loadCart(cartId)),
});
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  requesting: state.cart.requesting,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
