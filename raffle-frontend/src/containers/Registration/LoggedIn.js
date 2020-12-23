import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/UserActions";
import { connect } from "react-redux";

// Bootstrap
import Button from "react-bootstrap/Button";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// Renders only if user is logged in
function LoggedIn({ logout }) {
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="right-text">
      <Link to="/cart">
        <Button variant="link">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Button>
      </Link>
      <Link to="/account">
        <Button variant="link">
          {localStorage.notification ? <span>"News!"</span> : ""}
          {localStorage.name}
        </Button>
      </Link>
      <Link to="/">
        <Button className="header-btn" variant="warning" onClick={handleLogout}>
          Logout
        </Button>
      </Link>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});
export default connect(null, mapDispatchToProps)(LoggedIn);
