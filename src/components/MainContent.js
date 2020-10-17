import React from "react";
import "../styles/Container.css";
import { RandomJoke } from "./RandomJoke";
import { Categories } from "./Categories";
import { Search } from "./Search";
import { Favourites } from "./Favourites";

export const MainContent = ({ activePage }) => {
  return (
    <div className="container">
      {activePage === "random" ? (
        <RandomJoke></RandomJoke>
      ) : activePage === "categories" ? (
        <Categories></Categories>
      ) : activePage === "search" ? (
        <Search></Search>
      ) : activePage === "favourites" ? (
        <Favourites></Favourites>
      ) : null}
    </div>
  );
};
