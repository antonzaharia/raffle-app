import React from "react";
import Registration from "./Registration";
import LoggedIn from "./LoggedIn";

export default function Header(props) {
  const loggedIn = () => {
    if (props.user || localStorage.email) {
      return <LoggedIn />
    } else {
       return <Registration />
    }
  };
  return (
    <div className="header">
      <a href="/" className="logo">Raffle</a>
      {loggedIn()}
    </div>
  );
}
