import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.quantity}</td>
        <td>{this.props.data.price}</td>
      </tr>
    );
  }
}
