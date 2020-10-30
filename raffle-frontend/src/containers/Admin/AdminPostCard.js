import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge"
import { Link } from "react-router-dom";
import { makeLink } from "../../helpers/helpers";
import { connect } from 'react-redux'
import { deletePost, rafflePost } from "../../actions/PostsActions";

function AdminPostCard({ post, deletePost, rafflePost }) {
  const makeEditLink = (id) => {
    return `/posts/${id}/edit`
  }
  return (
    
    <Card body>
      <Link to={makeLink(post.id)}>{post.title}</Link>  &nbsp;&nbsp;
      || {post.tickets_number} tickets || &nbsp;&nbsp;
      {post.winner ? <span>Winning Ticket: <Badge variant="primary">{post.winner}</Badge> ||&nbsp;&nbsp;</span> : <span>Raffle on: || {post.date} ||&nbsp;&nbsp;</span>}
      <Link to={makeEditLink(post.id)}><Button variant="warning">Edit</Button>&nbsp;</Link>
      <Button onClick={() => rafflePost(post.id)} variant="success" disabled={post.winner ? "disabled" : ""}>Raffle</Button>&nbsp;
      <Button onClick={() => deletePost(post.id)} variant ="danger">Delete</Button>
    </Card>
  );
}
const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  rafflePost: id => dispatch(rafflePost(id))
})
export default connect(null, mapDispatchToProps)(AdminPostCard)