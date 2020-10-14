import React from "react";
import { getCategoriesListAsync } from "../cnApi";

export const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getCategoriesListAsync().then((list) => setCategories(list));
  }, []);

  return (
    <div className="container">
      {categories.map((category) => (
        <button className="list-item">{category}</button>
      ))}
    </div>
  );
};
