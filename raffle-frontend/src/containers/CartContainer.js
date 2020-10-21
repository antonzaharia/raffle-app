import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCart } from "../actions/CartActions";
import CartItem from "../components/Cart/CartItem";

import Table from "react-bootstrap/Table";

class CartContainer extends Component {
  componentDidMount() {
    if (localStorage.cart_id) {
      this.props.loadCart(localStorage.cart_id);
    }
  }
  renderItems = () => {
    if (this.props.cart) {
      return this.props.cart.cart_items
        .reverse()
        .map((ci) => <CartItem key={ci.id} data={ci}/>);
    } else {
      return "Cart empty.";
    }
  };
  render() {
    return (
      <div>
        {this.props.requesting ? <p>Loading cart...</p> : ""}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </Table>
      </div>
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
