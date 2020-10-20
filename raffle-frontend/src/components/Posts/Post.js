import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post-card">
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={post.image}
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Link key={post.id} to={`/posts/${post.id}`}>
            <Button variant="success" block>
              ENTER NOW
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
