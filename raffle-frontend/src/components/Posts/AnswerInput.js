import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form"

export default function AnswerInput({answers}) {
  return (
    <div className="answers-flex">
      {answers.map((answer) => (
        <Form.Check
          custom
          className="answer"
          name="answer"
          key={answer.id}
          id={answer.id}
          type="radio"
          label={answer.content}
        />
      ))}
    </div>
  );
}
