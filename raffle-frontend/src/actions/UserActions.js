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
          localStorage.setItem("id", result.id);
          localStorage.setItem("name", result.name);
          localStorage.setItem("email", result.email);
          localStorage.setItem("cart_id", result.cart_id);
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
          localStorage.setItem("id", result.id);
          localStorage.setItem("name", result.name);
          localStorage.setItem("email", result.email);
          localStorage.setItem("cart_id", result.cart_id);
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
  localStorage.removeItem("name", localStorage.name);
  localStorage.removeItem("email", localStorage.name);
  localStorage.removeItem("id", localStorage.name);
  localStorage.removeItem("cart_id", localStorage.name);
  localStorage.removeItem("admin", localStorage.name)
  return { type: "LOGOUT" };
}

export function loadUser(id) {
  return (dispatch) => {
    dispatch({ type: "START_LOADING_USER" });
    fetch(`http://localhost:3001/users/${id}`)
      .then((resp) => resp.json())
      .then((user) => dispatch({ type: "LOAD_USER", payload: user }));
  };
}

export function removeErrors() {
  return (dispatch) => {
    dispatch({ type: "REMOVE_ERRORS" })
  }
}