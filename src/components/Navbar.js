import React from "react";
import "../styles/Navbar.css";

export const Navbar = ({ activePage, setActivePage }) => {
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
          className={getMenuClass("categories")}
          onClick={() => changePage("categories")}
        >
          Categories
        </button>
      </div>
      <div className="logo"></div>
      <div className="search-bar">
        <input type="text" className="search-text" placeholder="Search..." />
      </div>
    </nav>
  );
};
