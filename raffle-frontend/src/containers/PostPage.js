import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../actions/PostsActions";

//Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class PostPage extends Component {
  componentDidMount() {
    this.props.showPost(this.props.match.params.postId);
  }
  render() {
    if (this.props.post) {
      return (
        <div className="main">
          <Card>
            <Card.Img variant="top" src={this.props.post.image} />
          </Card>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
      );
    } else {
      return <div className="main">Loading...</div>;
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  showPost: (postId) => dispatch(showPost(postId)),
});
const mapStateToProps = (state) => ({
  post: state.posts.post,
});
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
