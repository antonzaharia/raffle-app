import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCart } from "../actions/CartActions";
import CartItem from "../components/Cart/CartItem";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class CartContainer extends Component {
  componentDidMount() {
    if (localStorage.cart_id) {
      this.props.loadCart(localStorage.cart_id);
    }
  }
  renderItems = () => {
    if (this.props.cart) {
      return this.props.cart.cart_items_info
        .reverse()
        .map((ci) => <CartItem key={ci.id} data={ci} />);
    } else {
      return "Cart empty.";
    }
  };
  render() {
    return (
      <Card style={{ width: "100%" }}>
        {this.props.requesting ? <p>Loading cart...</p> : ""}
        <ListGroup variant="flush">
          {this.renderItems()}
        </ListGroup>
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
