import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions/PostsActions";
import PostList from "../components/Posts/PostsList"
import Loading from "../components/Loading"
import DateCheck from "../components/Raffle/DateCheck";
import Card from "react-bootstrap/esm/Card";
import Admin from "./Admin/Admin";

class MainContainer extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  checkUser = () => {
    if(this.props.user && this.props.user.admin || localStorage.admin) {
      return <Admin posts={this.props.posts}/>
    } else {
      return <div className="main">
      {this.props.requesting ? <Loading /> : ""}
      <DateCheck posts={this.props.posts}/>
      <br /><hr /><br />
      <Card body className="center-text bold-text" bg="danger" text="light">CURRENT COMPETITIONS</Card>
      <br /><hr /><br />
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
  requesting: state.requesting
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
