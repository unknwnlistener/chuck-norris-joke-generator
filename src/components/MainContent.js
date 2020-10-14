import React from "react";
import { getRandomJokeAsync } from "../cnApi";

export const MainContent = () => {
  const [joke, setJoke] = React.useState({});

  React.useEffect(() => {
    getRandomJokeAsync().then((data) => setJoke(data));
  }, []);

  function newJoke() {
    getRandomJokeAsync().then((data) => setJoke(data));
  }

  return (
    <section className="container">
      <div className="quote">
        <span className="quote-text">{joke.value}</span>
      </div>
      <button onClick={newJoke}>Generate Random</button>
    </section>
  );
};
