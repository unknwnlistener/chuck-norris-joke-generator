import React from "react";
// import { twitterApi } from "../twitterApi";
import "../styles/Icons.css";
import "../styles/Joke.css";

export const Joke = ({ jokeId, jokeValue }) => {
  const [isFav, setIsFav] = React.useState(false);

  const getTwitterText = (text) => {
    return `https://twitter.com/intent/tweet?text=${text}&hashtags=ChuckNorris%2CJokeGenerator`;
  };

  const toggleFavourite = (event) => {
    event.preventDefault();
    const fav = localStorage.getItem("favourites");
    let favArray = JSON.parse(fav || "[]");
    // if (fav !== null && fav !== "") {
    //   if (!isFav) favArray.push({ id: jokeId, value: jokeValue });
    //   else {
    //     console.warn("repeated like");
    //     return;
    //   }
    // } else {
    //   favArray.push({ id: jokeId, value: jokeValue });
    // }
    if (isFav) {
      favArray = favArray.filter((el) => el.id !== jokeId);
      setIsFav(false);
    } else {
      favArray.push({ id: jokeId, value: jokeValue });
      setIsFav(true);
    }
    console.log(favArray, JSON.stringify(favArray));
    localStorage.setItem("favourites", JSON.stringify(favArray));
  };

  const checkFavourite = () => {
    const favList = JSON.parse(localStorage.getItem("favourites") || "[]");
    return favList.filter((el) => el.id === jokeId).length > 0;
  };

  React.useEffect(() => {
    setIsFav(checkFavourite());
    //eslint-disable-next-line
  }, [jokeId]);

  return jokeValue != null && jokeId != null ? (
    <div className="quote">
      <div className="text-container">
        <span className="quote-text">{jokeValue}</span>
      </div>
      <div className="icon-container">
        <button
          className={
            "icon-button " +
            (isFav ? "active" : "") +
            " like-button .transition-links .ripple"
          }
          onClick={toggleFavourite}
        >
          <i className="fa fa-heart"></i>
        </button>
        <a
          className="icon-button twitter-share-button .transition-links"
          href={getTwitterText(jokeValue)}
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  ) : (
    <p>No Jokes found...</p>
  );
};
