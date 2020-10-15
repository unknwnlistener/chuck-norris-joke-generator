import React from "react";
import { freeTextSearch } from "../cnApi";
import { Joke } from "./Joke";
import "../styles/Search.css";

export const Search = () => {
  const [jokes, setJokes] = React.useState([]);

  const searchSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.searchInput.value;
    freeTextSearch(value).then((quotes) => setJokes(quotes.result));
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <form className="search" onSubmit={searchSubmit}>
          <input
            type="text"
            className="search-text"
            placeholder="Search..."
            name="searchInput"
            autoComplete="off"
          />
          <button type="submit" className="search-submit">
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </form>
      </div>
      <div className="joke-container">
        {jokes.slice(0, 10).map((joke) => (
          <div key={joke.id} className="search-quotes">
            <Joke jokeValue={joke.value}></Joke>
          </div>
        ))}
      </div>
    </div>
  );
};
