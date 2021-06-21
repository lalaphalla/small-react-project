import React, { useState } from "react";
import Categories from '../../components/category/category'
import Menu from '../../components/menu-item/menu-item'
import items from "./data";

import "./menu.scss";

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]
const MenuPage = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([allCategories]);


  const filterItems = (category) =>{
    
    if(category === "all"){
      setMenuItems(items)
      return
    }
    const newItems = menuItems.filter((item)=>item.category=== category)
    setMenuItems(newItems)
    console.log(menuItems);
  }
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Menu</h2>
        </div>

        <Categories filterItems={filterItems} Categories={allCategories}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MenuPage;
