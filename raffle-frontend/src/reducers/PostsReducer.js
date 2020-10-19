export default function PostsReducer(state = { posts: [], requesting: false }, action) {
    switch(action.type){
        case "LOADING_POSTS":
            return {...state, posts: [...state.posts], requesting: true}
        case "LOADED_POSTS":
            return {...state, posts: action.payload, requesting: false}
        default:
            return state
    }
}