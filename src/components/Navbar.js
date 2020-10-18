import React from "react";
import "../styles/Navbar.css";

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

  return (
    <nav className="navbar">
      <div className="menu-items">
        <button
          className={getMenuClass("home")}
          onClick={() => changePage("home")}
        >
          Home
        </button>
        <button
          className={getMenuClass("search")}
          onClick={() => changePage("search")}
        >
          Search
        </button>
        <button
          className={getMenuClass("favourites")}
          onClick={() => changePage("favourites")}
        >
          Favourites
        </button>
      </div>
      <div className="logo"></div>
    </nav>
  );
};
