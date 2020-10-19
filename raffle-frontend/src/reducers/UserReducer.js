export default function UserReducer(state = {user: null, requesting: false, errors: false}, action) {
  switch (action.type) {
    case "FAILED":
      return {...state, requesting: false, errors: action.payload}
    case "LOGGING_IN":
        return {...state,
          user: state.user,
          requesting: true
        }
    case "SIGNUP":
        const newUser = {
            name: action.payload.name,
            email: action.payload.email
        }
      return {...state, user: newUser, requesting: false, errors: false};
    case "LOGIN":
        const user = {
            name: action.payload.name,
            email: action.payload.email
        }
      return {...state, user, requesting: false, errors: false};
    case "LOGOUT":
        return {...state, user: ""}
    default:
      return state;
  }
}
 