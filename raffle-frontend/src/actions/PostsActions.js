const URL = "https://sleepy-cliffs-09142.herokuapp.com/"
export function loadPosts() {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${URL}posts`)
      .then((resp) => resp.json())
      .then((posts) => dispatch({ type: "LOADED_POSTS", payload: posts }));
  };
}
export function showPost(postId) {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${URL}posts/${postId}`)
      .then((resp) => resp.json())
      .then((post) => dispatch({ type: "SHOW_POST", payload: post }));
  };
}
export function newPost(post) {
  return (dispatch) => {
    fetch(`${URL}posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then((resp) => resp.json())
    .then((result) => dispatch({ type: "CREATE_POST", payload: result}));
  }
}
export function editPost(post) {
  return (dispatch) => {
    fetch(`${URL}posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then((resp) => resp.json())
    .then((result) => dispatch({ type: "EDIT_POST", payload: result}));
  }
}
export function deletePost(id) {
  return (dispatch) => {
    fetch(`https://sleepy-cliffs-09142.herokuapp.com/posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    }).then((resp) => resp.json())
    .then((result) => dispatch({ type: "DELETE_POST", payload: result}));
  }
}
export function rafflePost(postId) {
  return (dispatch) => {
    fetch(`${URL}tickets/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postId),
    }).then((resp) => resp.json())
    .then((result) => dispatch({ type: "RAFFLE_POST", payload: result}));
  }
}