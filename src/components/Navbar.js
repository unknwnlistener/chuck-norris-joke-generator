import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu-items">
        <button className="home">Home</button>
        <button className="categories">Categories</button>
      </div>
      <div className="logo"></div>
      <div className="search-bar">Search</div>
    </nav>
  );
};
