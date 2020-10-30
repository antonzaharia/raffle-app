import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions/PostsActions";
import PostList from "../components/Posts/PostsList"
import Loading from "../components/Loading"
import DateCheck from "../components/Raffle/DateCheck";
import Card from "react-bootstrap/esm/Card";
import { Redirect } from "react-router-dom";

class MainContainer extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  checkUser = () => {
    if(localStorage.admin === "true") {
      return <Redirect to="/admin" />
    } else {
      return <div className="main">
      {this.props.requesting ? <Loading /> : ""}
      <DateCheck posts={this.props.posts}/>
      <br /><hr /><br />
      <Card body className="center-text bold-text" bg="danger" text="light">CURRENT COMPETITIONS</Card>
      <br /><hr /><br />
      
      {this.props.requesting ? <Loading /> : ""}
      <PostList posts={this.props.posts}/>
    </div>;
    }
  }

  render() {
    return(<div>{this.checkUser()}</div>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
});
const mapStateToProps = (state) => ({
  user: state.users.user,
  posts: state.posts.posts,
  requesting: state.posts.requesting
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
