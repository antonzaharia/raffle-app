import React from "react";
import Registration from "./Registration";
import LoggedIn from "../../components/Registration/LoggedIn";
import Admin from "../Admin/AdminButton";

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
      <a href="/" className="logo">
        Raffle
      </a>
      {loggedIn()}
      
    </div>
  );
}
