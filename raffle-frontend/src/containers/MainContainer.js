import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions/PostsActions";
import PostList from "../components/Posts/PostsList"
import Loading from "../components/Loading"
import DateCheck from "../components/Raffle/DateCheck";

class MainContainer extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return <div className="main">
      {this.props.requesting ? <Loading /> : ""}
      <DateCheck posts={this.props.posts}/>
      <br /><hr /><br />
      <PostList posts={this.props.posts}/>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
});
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  requesting: state.requesting
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
