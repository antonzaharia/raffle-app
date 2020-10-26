import React from "react";
import { makeLink } from "../../helpers/helpers";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge"

export default function Ticket({ ticket }) {
  const showWon = () => {
    if(ticket.winner === false) {
      return <Badge variant="warning">Raffle still on pending</Badge>
    } else if (ticket.winner === "none") {
      return <Badge variant="secondary">Not a Winner</Badge>
    } else {
      return <h3><Badge variant="success">Winner!</Badge></h3> 
    }
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <span>
            Ticket number: {ticket.number} || {showWon()}
          </span>
          <span className="float-right">
            See post: <Link to={makeLink(ticket.post_id)}>Post</Link>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}
