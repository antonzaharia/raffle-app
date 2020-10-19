import React from "react";
import Registration from "./Registration";

export default function Header(props) {
  const loggedIn = () => {
    if (props.user || localStorage.user_email) {
      return <p>Lodded in as {localStorage.user_email}</p>;
    } else {
       return <Registration />
    }
  };
  return (
    <div className="header">
      <a href="/" className="logo">
        Raffle
      </a>
      {loggedIn()}
      
    </div>
  );
}
