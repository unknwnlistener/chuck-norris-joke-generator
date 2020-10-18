import React from "react";
import {
  getCategoriesListAsync,
  getCategoryJokeAsync,
  getRandomJokeAsync,
} from "../cnApi";
import { Joke } from "./Joke";
import "../styles/Home.css";

export const Home = () => {
  const [categories, setCategories] = React.useState([]);
  const [joke, setJoke] = React.useState({});

  React.useEffect(() => {
    const localCategories = localStorage.getItem("categories");
    if (localCategories === "") {
      getCategoriesListAsync().then((list) => setCategories(list));
    } else {
      setCategories(localCategories.split(","));
    }
  }, []);

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

  const categorySubmit = (event) => {
    event.preventDefault();
    const cat = event.target.elements.selectCategory.value;
    getCategoryJokeAsync(cat).then((joke) => setJoke(joke));
  };

  const newJoke = () => {
    getRandomJokeAsync().then((data) => {
      let saveObj = { id: data?.id, value: data?.value };
      setJoke(saveObj);
      localStorage.setItem("random", JSON.stringify(saveObj));
    });
  };

  return (
    <div className="categories-container">
      <div className="categories">
        <form onSubmit={categorySubmit}>
          <select name="selectCategory" defaultValue="none">
            <option value="none" disabled hidden>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} className="list-item" value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="clicker" type="submit">
            Search
          </button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="clicker" onClick={newJoke}>
          Generate Random{" "}
          <span role="img" aria-label="shuffle">
            🔀
          </span>
        </button>
      </div>
      <div className="joke-container">
        {joke != null ? (
          <Joke jokeId={joke.id} jokeValue={joke.value}></Joke>
        ) : null}
      </div>
    </div>
  );
};
