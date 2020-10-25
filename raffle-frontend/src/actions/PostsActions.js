export function loadPosts() {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch("http://localhost:3001/posts")
      .then((resp) => resp.json())
      .then((posts) => dispatch({ type: "LOADED_POSTS", payload: posts }));
  };
}
export function showPost(postId) {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`http://localhost:3001/posts/${postId}`)
      .then((resp) => resp.json())
      .then((post) => dispatch({ type: "SHOW_POST", payload: post }));
  };
}
export function newPost(post) {
  return (dispatch) => {
    fetch("http://localhost:3001/posts" ,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then((resp) => resp.json())
    .then((result) => dispatch({ type: "CREATE_POST", payload: result}));
  }
}

