import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../../actions/PostsActions";

import Loading from "../Loading";
import PostForm from "./PostForm";

//Bootstrap
import Card from "react-bootstrap/Card";

// Post show page
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
            <Card.Header>Details</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.post.title}</Card.Title>
              <Card.Text>{this.props.post.description}</Card.Text>
              <Card.Title>$ {this.props.post.price} per ticket</Card.Title>
              <hr />
              {this.props.post.winner ? (
                <p>Winner is ticket number: {this.props.post.winner}</p>
              ) : (
                <PostForm
                  answers={this.props.post.answers[0]}
                  question={this.props.post.question.content}
                />
              )}
            </Card.Body>
            <Card.Footer>
              Winner announced on: {this.props.post.date}
            </Card.Footer>
          </Card>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  showPost: (postId) => dispatch(showPost(postId)),
});
const mapStateToProps = (state) => ({
  post: state.posts.post,
  requesting: state.requesting,
});
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
