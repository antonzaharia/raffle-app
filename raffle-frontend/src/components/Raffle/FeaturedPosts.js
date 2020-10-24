import React from "react";

import Carousel from "react-bootstrap/Carousel";

export default function FeaturedPosts({ posts }) {
  const loadPost = () => {
    return posts.map((post) => (
      <Carousel.Item key={post.id} interval={1000}>
        <img className="d-block w-100" src={post.image} alt="First slide" />
        <Carousel.Caption>
          <h3>{post.title}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };
  return <Carousel>{loadPost()}</Carousel>;
}
