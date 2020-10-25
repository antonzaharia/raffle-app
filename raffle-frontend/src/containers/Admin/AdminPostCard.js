import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";
import { makeLink } from "../../helpers/helpers";

export default function AdminPostCard({ post }) {
  return (
    <Card body>
      <Link to={makeLink(post.id)}>{post.title}</Link>  &nbsp;&nbsp;
      || {post.tickets_number} tickets || &nbsp;&nbsp;
      Raffle on: || {post.date} ||&nbsp;&nbsp;
      <Link to="/caca"><Button variant="warning">Edit</Button>&nbsp;</Link>
      <Link to="/caca"><Button variant="success">Raffle</Button>&nbsp;</Link>
      <Link to="/caca"><Button variant ="danger">Delete</Button></Link>
    </Card>
  );
}
