import React from "react";
import { makeLink } from '../../helpers/helpers'

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Ticket({ ticket }) {
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
