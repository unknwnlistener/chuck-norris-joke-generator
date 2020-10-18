import React from "react";
import "../styles/Container.css";
import { Home } from "./Home";
import { Search } from "./Search";
import { Favourites } from "./Favourites";

export const MainContent = ({ activePage }) => {
  return (
    <div className="container">
      {activePage === "home" ? (
        <Home></Home>
      ) : activePage === "search" ? (
        <Search></Search>
      ) : activePage === "favourites" ? (
        <Favourites></Favourites>
      ) : null}
    </div>
  );
};
