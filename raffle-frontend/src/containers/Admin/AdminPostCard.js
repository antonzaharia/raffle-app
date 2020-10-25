import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";
import { makeLink } from "../../helpers/helpers";
import { connect } from 'react-redux'
import { deletePost } from "../../actions/PostsActions";

function AdminPostCard({ post, deletePost }) {
  const makeEditLink = (id) => {
    return `/posts/${id}/edit`
  }
  return (
    <Card body>
      <Link to={makeLink(post.id)}>{post.title}</Link>  &nbsp;&nbsp;
      || {post.tickets_number} tickets || &nbsp;&nbsp;
      Raffle on: || {post.date} ||&nbsp;&nbsp;
      <Link to={makeEditLink(post.id)}><Button variant="warning">Edit</Button>&nbsp;</Link>
      <Link to="/caca"><Button variant="success">Raffle</Button>&nbsp;</Link>
      <Button onClick={() => deletePost(post.id)}variant ="danger">Delete</Button>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
})
export default connect(null, mapDispatchToProps)(AdminPostCard)