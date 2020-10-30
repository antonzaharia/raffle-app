import { setLocalStorage, removeLocalStorage } from '../helpers/helpers'

export function signUp(user) {
  return (dispatch) => {
    dispatch({ type: "LOGGING_IN" });
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if ("errors" in result) {
          dispatch({ type: "FAILED", payload: result.errors });
        } else {
          setLocalStorage(result)
          dispatch({
            type: "SIGNUP",
            payload: result,
          });
        }
      });
  };
}
export function login(user) {
  return (dispatch) => {
    dispatch({ type: "LOGGING_IN" });
    fetch("http://localhost:3001/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if ("errors" in result) {
          dispatch({ type: "FAILED", payload: result.errors });
        } else {
          setLocalStorage(result)
          localStorage.setItem("admin", result.admin);
          dispatch({
            type: "LOGIN",
            payload: result,
          });
        }
      });
  };
}

export function logout() {
  removeLocalStorage()
  localStorage.removeItem("admin", localStorage.name)
  return { type: "LOGOUT" };
}
// Loading user on /account page
export function loadUser(id) {
  return (dispatch) => {
    dispatch({ type: "START_LOADING_USER" });
    fetch(`http://localhost:3001/users/${id}`)
      .then((resp) => resp.json())
      .then((user) => dispatch({ type: "LOAD_USER", payload: user }));
  };
}
// Remove errors from login/signup form
export function removeErrors() {
  return (dispatch) => {
    dispatch({ type: "REMOVE_ERRORS" })
  }
}