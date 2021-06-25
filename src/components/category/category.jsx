import React from "react";

import "./category.scss";

const Categories = ({ filterItems, categories }) => {
  // allCategories.forEach((category, index)=> {
  //   console.log(category,index)})

  console.log(categories);
  return (
    <div className="category">
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button className="filter-btn" type="button" key={index} onClick={()=>filterItems(category)}>            
            {category}
          </button>
        );
      })}
    </div>
    </div>
    
  );
};

export default Categories;
