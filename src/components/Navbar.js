import React from "react";
import "../styles/Navbar.css";
import { freeTextSearch } from "../cnApi";

export const Navbar = ({ activePage, setActivePage }) => {
  // const [searchText, setSearchText] = React.useState("");

  const getMenuClass = (value) => {
    if (value === activePage) return value + " active";
    return value;
  };

  const changePage = (value) => {
    if (value === activePage) return;
    setActivePage(value);
  };

  // const searchSubmit = (event) => {
  //   event.preventDefault();
  //   const value = event.target.elements.searchInput.value;
  //   console.log(value);
  //   freeTextSearch(value).then((quote) => console.log("Quote", quote));
  // };

  return (
    <nav className="navbar">
      <div className="menu-items">
        <button
          className={getMenuClass("random")}
          onClick={() => changePage("random")}
        >
          Random
        </button>
        <button
          className={getMenuClass("categories")}
          onClick={() => changePage("categories")}
        >
          Categories
        </button>
        <button
          className={getMenuClass("search")}
          onClick={() => changePage("search")}
        >
          Search
        </button>
      </div>
      <div className="logo"></div>
      {/* <div className="search-bar">
        <form className="search" onSubmit={searchSubmit}>
          <input
            type="text"
            className="search-text"
            placeholder="Search..."
            name="searchInput"
            autoComplete="off"
          />
          <button type="submit" className="search-submit">
            ▶
          </button>
        </form>
      </div> */}
    </nav>
  );
};
