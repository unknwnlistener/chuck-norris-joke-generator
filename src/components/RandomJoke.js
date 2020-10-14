import React from "react";
import { Joke } from "./Joke";
import { getRandomJokeAsync } from "../cnApi";

export const RandomJoke = () => {
  const [joke, setJoke] = React.useState("");

  function newJoke() {
    getRandomJokeAsync().then((data) => {
      setJoke(data.value);
      localStorage.setItem("random", data.value);
    });
  }

  React.useEffect(() => {
    const localJoke = localStorage.getItem("random");
    if (localJoke === "") {
      newJoke();
    } else {
      setJoke(localJoke);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Joke jokeValue={joke}></Joke>
      <button onClick={newJoke}>Generate Random</button>
    </>
  );
};
