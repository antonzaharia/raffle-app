import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../actions/PostsActions";

//Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class PostPage extends Component {
  componentDidMount() {
    this.props.showPost(this.props.match.params.postId);
  }
  render() {
    if (this.props.post) {
      return (
        <div className="main">
            {console.log(this.props.post)}
          <Card>
            <Card.Img variant="top" src={this.props.post.image} />
          </Card>
          <Card className="text-center">
            <Card.Header>Details</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.post.title}</Card.Title>
              <Card.Text>{this.props.post.description}</Card.Text>
              <Card.Title>$ {this.props.post.price} per ticket</Card.Title>
              <Form>
                <Button variant="primary">Go somewhere</Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              Winner announced on: {this.props.post.date}
            </Card.Footer>
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
