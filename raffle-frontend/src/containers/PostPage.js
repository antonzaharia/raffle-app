import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../actions/PostsActions";
import AnswerInput from "../components/Posts/AnswerInput"
import TicketsInput from "../components/Posts/TicketsInput"

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
              <Card.Title>You want to get in?</Card.Title>
              <Card.Text>Answer the following question.</Card.Text>
              <Form>
                <Card.Header>
                  <h4>{this.props.post.question.content}</h4>
                </Card.Header>
                <AnswerInput answers={this.props.post.answers[0]}/>
                <TicketsInput />
                <Button variant="primary">Add to cart</Button>
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
