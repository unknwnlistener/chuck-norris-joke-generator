import React from "react";
import { getCategoriesListAsync, getCategoryJokeAsync } from "../cnApi";
import { Joke } from "./Joke";

export const Categories = () => {
  const [categories, setCategories] = React.useState([]);
  const [joke, setJoke] = React.useState("");

  React.useEffect(() => {
    const localCategories = localStorage.getItem("categories");
    if (localCategories === "") {
      getCategoriesListAsync().then((list) => setCategories(list));
    } else {
      setCategories(localCategories.split(","));
    }
  }, []);

  const categorySubmit = (event) => {
    event.preventDefault();
    const cat = event.target.elements.selectCategory.value;
    getCategoryJokeAsync(cat).then((joke) => setJoke(joke.value));
  };

  return (
    <div className="categories-container">
      <div className="categories">
        <form onSubmit={categorySubmit}>
          <select name="selectCategory">
            <option value="none" selected disabled hidden>
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
      </div>
      <div className="joke-container">
        {joke !== "" ? <Joke jokeValue={joke}></Joke> : null}
      </div>
    </div>
  );
};
