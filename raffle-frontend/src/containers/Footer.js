import React from "react";

export default function Footer() {
  // Getting the current year
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <div className="center-text footer">
      <span>&#174;</span> {getYear()} Raffle
    </div>
  );
}
