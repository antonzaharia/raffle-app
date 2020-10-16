export default function UserReducer(state = {user: null}, action) {
  switch (action.type) {
    case "SIGNUP":
        const newUser = {
            name: action.payload.name,
            email: action.payload.email
        }
      return {...state, newUser};
    case "LOGIN":
        const user = {
            name: action.payload.name,
            email: action.payload.email
        }
      return {...state, user};
    default:
      return state;
  }
}
 