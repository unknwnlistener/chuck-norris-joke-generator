import React from "react";
import { Joke } from "./Joke";
import { getRandomJokeAsync } from "../cnApi";

export const RandomJoke = () => {
  const [joke, setJoke] = React.useState({});

  function newJoke() {
    getRandomJokeAsync().then((data) => {
      let saveObj = { id: data?.id, value: data?.value };
      setJoke(saveObj);
      localStorage.setItem("random", JSON.stringify(saveObj));
    });
  }

  React.useEffect(() => {
    const localJoke = localStorage.getItem("random");
    if (localJoke === null) {
      newJoke();
    } else {
      setJoke(JSON.parse(localJoke));
      // newJoke();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Joke jokeId={joke?.id} jokeValue={joke?.value}></Joke>
      <button className="clicker" onClick={newJoke}>
        Generate Random{" "}
        <span role="img" aria-label="shuffle">
          🔀
        </span>
      </button>
    </>
  );
};
