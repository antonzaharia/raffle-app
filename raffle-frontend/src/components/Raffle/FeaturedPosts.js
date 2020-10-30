import React from "react";
import { makeLink } from '../../helpers/helpers'
import { Link } from "react-router-dom";

// Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";

// Rendering the slider from the homepage
export default function FeaturedPosts({ posts }) {
  const loadPost = () => {
    return posts.map((post) => (
      <Carousel.Item key={post.id} interval={1000}>
        <img className="d-block w-100" src={post.image} alt="First slide" />
        <Carousel.Caption>
          <h3>{post.title}</h3>
          <p>Winner will be announced today!</p>
          <Button><Link className="button" to={makeLink(post.id)}>See Post</Link></Button>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };
  return <Carousel className="carousel">{loadPost()}</Carousel>;
}
