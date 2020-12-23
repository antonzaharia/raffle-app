export function makeLink(id) {
  return `/posts/${id}`;
}

export function setLocalStorage(result) {
  localStorage.setItem("id", result.id);
  localStorage.setItem("name", result.name);
  localStorage.setItem("email", result.email);
  localStorage.setItem("cart_id", result.cart_id);
}
export function removeLocalStorage() {
  localStorage.removeItem("name", localStorage.name);
  localStorage.removeItem("email", localStorage.name);
  localStorage.removeItem("id", localStorage.name);
  localStorage.removeItem("cart_id", localStorage.name);
}
