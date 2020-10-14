import React from "react";

export const Joke = ({ jokeValue }) => {
  return (
    <div className="quote">
      <span className="quote-text">{jokeValue}</span>
    </div>
  );
};
