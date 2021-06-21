import React from "react";

import "./category.scss";

const Categories = ({ filterItems, allCategories}) => {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => filterItems("all")}
      >all</button>

      <button
        className="filter-btn"
        onClick={() => filterItems("breakfast")}
      >Breakfast</button>
    </div>
  );
};

export default Categories;
