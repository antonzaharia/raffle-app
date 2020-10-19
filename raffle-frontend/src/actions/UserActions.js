export function signUp(user) {
  return (dispatch) => {
    dispatch({ type: "LOGGING_IN" });
    fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .then((result) => {
      if ("errors" in result) {
        dispatch({type: "FAILED", payload: result.errors}) 
      } else {
        dispatch({
            type: "SIGNUP",
            payload: result
          })
      }
    })}
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
          dispatch({type: "FAILED", payload: result.errors}) 
        } else {
          localStorage.setItem("user_email", result.email)
          console.log(localStorage)
          dispatch({
            type: "LOGIN",
            payload: result,
          });
        }
      });
  };
}
