import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCart, checkout } from "../actions/CartActions";
import CartForm from "../components/Cart/CartForm"
import Loading from "../components/Loading";

// Bootstrap
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


class CartContainer extends Component {
  componentDidMount() {
    // Setting Redux store from localStorage to load the cart
    if (localStorage.cart_id) {
      this.props.loadCart(localStorage.cart_id);
    }
  }
  
  render() {
    return (
      <Card style={{ width: "100%" }} variant="primary">
        {this.props.requesting ? <Loading /> : ""}
        <ListGroup variant="flush">
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
