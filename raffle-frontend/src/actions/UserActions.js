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
  return { type: "LOGOUT" };
}
