export default function UserReducer(state = {user: null}, action) {
  switch (action.type) {
    case "SIGNUP":
      console.log(action.payload)
      return {...state, user: action.payload};
    default:
      return state;
  }
}
