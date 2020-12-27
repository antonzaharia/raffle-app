export function loadNotifications(userId) {
  return (dispatch) => {
    fetch(`https://localhost:3001/users/${userId}/notifications`)
      .then((resp) => resp.json())
      .then((result) => {
        dispatch({
          type: "LOAD_NOTIFICATIONS",
          payload: result,
        });
      });
  };
}
