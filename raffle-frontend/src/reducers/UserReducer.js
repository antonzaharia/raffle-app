export default function UserReducer(state = {}, action) {
  switch (action.type) {
    case "SIGNUP":
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((resp) => resp.json())
        .then((result) => console.log(result));
      return state;
    default:
      return state;
  }
}
