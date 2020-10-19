export function loadPosts() {
    return (dispatch) => {
        dispatch({type: "LOADING_POSTS"})
        fetch("http://localhost:3001/posts")
        .then((resp) => resp.json())
        .then((posts) => dispatch({ type: "LOADED_POSTS", payload: posts }))
    }
}