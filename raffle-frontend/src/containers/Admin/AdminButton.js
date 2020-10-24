import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default class AdminButton extends Component {
  render() {
    return (
      <div className="right-text">
        <Link to='/admin'><Button variant="link">Dashboard</Button></Link>
      </div>
    );
  }
}
