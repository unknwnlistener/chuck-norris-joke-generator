import React from "react";
import { twitterApi } from "../twitterApi";
import "../styles/Twitter.css";

export const Joke = ({ jokeValue }) => {
  React.useEffect(() => {
    twitterApi().then((data) => console.log("Twitter called", data));
  }, []);

  const getTwitterText = (text) => {
    return `https://twitter.com/intent/tweet?text=${text}`;
  };

  return (
    <div className="quote">
      <span className="quote-text">{jokeValue}</span>
      <a
        className="twitter-share-button"
        href={getTwitterText(jokeValue)}
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa fa-twitter"></i>
      </a>
    </div>
  );
};
