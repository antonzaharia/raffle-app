import React from "react";

// Bootstrap
import Alert from "react-bootstrap/Alert";

export default function Error({errors}) {
  if (errors) {
    return (
        <div className="center-text">
            {Object.keys(errors).map( (error, i) => <Alert key={error+i} variant="danger">{error.toUpperCase() + " " + errors[error]}</Alert>)}
        </div>
    )
  } else {
    return "";
  }
}
