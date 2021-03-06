export function newCartItem(data) {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("https://sleepy-cliffs-09142.herokuapp.com/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if ("errors" in result) {
          dispatch({ type: "FAILED", payload: result.errors });
        } else {
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
    dispatch({ type: "LOADING" });
    fetch(`https://sleepy-cliffs-09142.herokuapp.com/carts/${cartId}`)
      .then((resp) => resp.json())
      .then((result) =>
        dispatch({
          type: "LOAD_CART",
          payload: result,
        })
      );
  };
}
export function deleteCartItem(id) {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`https://sleepy-cliffs-09142.herokuapp.com/cart_items/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    })
      .then((resp) => resp.json())
      .then((result) =>
        dispatch({
          type: "ITEM_REMOVED",
          payload: result,
        })
      );
  };
}
export function checkout(data) {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("https://sleepy-cliffs-09142.herokuapp.com/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if ("errors" in result) {
          dispatch({ type: "FAILED", payload: result.errors });
        } else {
          localStorage.setItem("cart_id", result.cart.id);
          dispatch({
            type: "CHECKOUT",
            payload: result,
          });
        }
      });
  };
}
