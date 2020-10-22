import React, { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export default class CartItem extends Component {
  render() {
    return (
      <ListGroup.Item variant="dark">
        <div className="cart-item">
          <Badge variant="primary" className="cart-badge-pill">
            {this.props.data.quantity}
          </Badge>
          <Badge variant="primary" className="cart-badge-pill">
            {this.props.data.price}
          </Badge>
          <Badge variant="primary" className="cart-badge-pill">
            ${this.props.data.price}
          </Badge>
        </div>
      </ListGroup.Item>
    );
  }
}
