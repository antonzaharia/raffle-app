import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Ticket({ ticket }) {
  const makeLink = (id) => {
    return `/posts/${id}`;
  };
  return (
    <div>
      <Card>
        <Card.Body>
          <span>Ticket number: {ticket.number}</span>
          <span className="float-right">
            See post: <Link to={makeLink(ticket.post_id)}>Post</Link>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}
