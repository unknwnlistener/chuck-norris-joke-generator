import React from "react";
import { getCategoriesListAsync } from "../cnApi";

export const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const localCategories = localStorage.getItem("categories");
    if (localCategories === "") {
      getCategoriesListAsync().then((list) => setCategories(list));
    } else {
      setCategories(localCategories.split(","));
    }
  }, []);

  return (
    <div className="categories">
      {categories.map((category) => (
        <button key={category} className="list-item">
          {category}
        </button>
      ))}
    </div>
  );
};
