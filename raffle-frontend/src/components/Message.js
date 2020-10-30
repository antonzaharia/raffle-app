import React from "react";

// Bootstrap
import Alert from "react-bootstrap/esm/Alert";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge"

export default function Message({ data }) {
    const renderMessage = () => {
        if (data) {
            return (
            <div>
                <Alert variant="success" className="center-text">{data.tickets.length} Tickets Created Successfully</Alert>
                {data.tickets.map((t) => (
                  <Card className="center-text" key={t.id} body><h2><Badge variant="primary">{t.number}</Badge></h2></Card>
                ))}
                
                <Alert variant="success" className="center-text">Wrong Answers</Alert>
                <Card className="center-text" body ><h2><Badge variant="danger">{data.wrong_answers}</Badge></h2></Card>
            </div>)
        }
    }
  return (
    <div>
      {renderMessage()}
    </div>
  );
}
