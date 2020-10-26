import React from "react";
import { makeLink } from "../../helpers/helpers";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge"

export default function Ticket({ ticket }) {
  const showWon = () => {
    if(ticket.winner) {
      return <h3><Badge variant="success">Winner!</Badge></h3> 
    } else if (!ticket.winner && ticket.post.winner > 0){
      return <Badge variant="secondary">not a winner</Badge>
    } else {
      return <Badge variant="warning">pending</Badge>
    }
  }
  return (
    <div>
      {console.log(ticket)}
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
