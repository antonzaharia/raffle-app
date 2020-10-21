export function newCartItem(data) {
  return (dispatch) => {
    dispatch({ type: "START_NEW_CART" });
    fetch("http://localhost:3001/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if ("errors" in result) {
          dispatch({ type: "FAILED", payload: result.errors });
        } else {
          console.log(result);
          dispatch({
            type: "NEW_CART_ITEM",
            payload: result,
          });
        }
      });
  };
}
export function loadCart(cartId) {
  return (dispatch) => {
    dispatch({ type: "START_NEW_CART" });
    fetch(`http://localhost:3001/carts/${cartId}`)
      .then((resp) => resp.json())
      .then((result) =>
        dispatch({
          type: "LOAD_CART",
          payload: result,
        })
      );
  };
}
