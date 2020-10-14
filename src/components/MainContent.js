import React from "react";
import { getRandomJokeAsync } from "../cnApi";
import "../styles/Container.css";

export const MainContent = ({ activePage }) => {
  const [joke, setJoke] = React.useState({});

  React.useEffect(() => {
    if (activePage === "categories") {
    } else {
      getRandomJokeAsync().then((data) => setJoke(data));
    }
  }, [activePage]);

  function newJoke() {
    getRandomJokeAsync().then((data) => setJoke(data));
  }

  return (
    <div className="container">
      <div className="quote">
        <span className="quote-text">{joke.value}</span>
      </div>
      <button onClick={newJoke}>Generate Random</button>
    </div>
  );
};
