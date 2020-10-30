import React from "react";
import { Link } from "react-router-dom";
import { makeLink } from "../../helpers/helpers";

//Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Rendering for each post on home page
export default function Post({ post }) {
  return (
    <div>
      <Card style={{ width: "20rem" }} className="post-card">
        <Card.Img
          className="post-img"
          variant="top"
          src={post.image}
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Link key={post.id} to={makeLink(post.id)}><Button variant="success" block>ENTER NOW</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}
