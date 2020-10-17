import React from "react";
import { Joke } from "./Joke";
import "../styles/Favourites.css";

export const Favourites = () => {
  const [jokes, setJokes] = React.useState([]);

  React.useEffect(() => {
    let fav = localStorage.getItem("favourites");
    if (fav !== null && fav !== "") {
      setJokes(JSON.parse(fav));
    }
  }, []);

  return (
    <div className="search-container">
      {jokes && jokes.length > 0 ? (
        <div className="joke-container">
          {jokes.slice(0, 10).map((joke) => (
            <Joke key={joke.id} jokeId={joke.id} jokeValue={joke.value}></Joke>
          ))}
        </div>
      ) : (
        <p>No Jokes to show...</p>
      )}
    </div>
  );
};
