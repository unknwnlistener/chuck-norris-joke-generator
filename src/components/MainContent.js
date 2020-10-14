import React from "react";
import "../styles/Container.css";
import { RandomJoke } from "./RandomJoke";
import { Categories } from "./Categories";

export const MainContent = ({ activePage }) => {
  return (
    <div className="container">
      {activePage === "random" ? (
        <RandomJoke></RandomJoke>
      ) : activePage === "categories" ? (
        <Categories></Categories>
      ) : activePage === "search" ? (
        <div className="container">Search</div>
      ) : null}
    </div>
  );
};
