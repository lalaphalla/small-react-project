import React, { useState } from "react";
import Categories from '../../components/category/category'
import Menu from '../../components/menu-item/menu-item'
import data from "./data";

import "./menu.scss";

const MenuPage = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Menu</h2>
        </div>

        <Categories />
        <Menu items={items} />
      </section>
    </main>
  );
};

export default MenuPage;
