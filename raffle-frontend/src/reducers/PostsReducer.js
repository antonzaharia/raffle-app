export default function PostsReducer(state = { posts: [], requesting: false }, action) {
    switch(action.type){
        case "LOADING_POSTS":
            return {...state, posts: [...state.posts], requesting: true}
        case "LOADED_POSTS":
            return {...state, posts: action.payload, requesting: false}
        case "SHOW_POST":
            return {...state, post: action.payload, requesting: false}
        case "CREATE_POST":
            return {...state, posts: [...state.posts, action.payload]}
        case "EDIT_POST":
            return {...state, posts: {...state.posts, post: action.payload}}
        case "DELETE_POST":
            const newPostsState = state.posts.filter( post => post.id !== action.payload)
            return {...state, posts: newPostsState}
        case "RAFFLE_POST":
            const newPosts =  state.posts.filter( post => post.id !== action.payload.id)
            const post = action.payload
            return {...state, posts: [...newPosts, post]}
        default:
            return state
    }
}