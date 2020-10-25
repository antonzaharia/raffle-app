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
            return {...state, post: [action.payload]}
        default:
            return state
    }
}