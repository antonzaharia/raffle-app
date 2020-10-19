import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Post({ post }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/24-ford-kuga-phev-2020-rt-static.jpg?itok=HDMoz75p"
      />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Button variant="success" block>ENTER NOW</Button>
      </Card.Body>
    </Card>
  );
}
