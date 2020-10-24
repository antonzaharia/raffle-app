import React, { Component } from "react";
import Card from "react-bootstrap/esm/Card";
import { Route } from "react-router-dom";
import AdminPostContainer from "./AdminPostContainer";

export default class Admin extends Component {
  render() {
    return (
      <div className="main">
        <h3 className="center-text">Admin Dashboard</h3>
        <Card><AdminPostContainer posts={this.props.posts}/></Card>
      </div>
    );
  }
}
