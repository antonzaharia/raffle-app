import React from "react";
import { Link } from "react-router-dom";
// Helpers
import { makeLink } from "../../helpers/helpers";

// Bootstrap
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card";

// Rendered in Account page for every ticket
export default function Ticket({ ticket }) {
  //Showing the raffle results
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
      <Card>
        <Card.Body>
          <span> Ticket number: {ticket.number} || {showWon()}</span>
          <span className="float-right-ticket">
            See post: <Link to={makeLink(ticket.post_id)}>Post</Link>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}
