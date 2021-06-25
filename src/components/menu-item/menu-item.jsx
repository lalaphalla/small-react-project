import React from "react";

import "./menu-item.scss";

const MenuItem = ({ items }) => {
  return (
    <div className="menu-page">
      <div className="section-center">
        {items.map((menuitem) => {
          const { id, title, price, img, desc } = menuitem;
          return (
            <article key={id} className="menu-item">
              <img className="photo" src={img} alt="" />
              <div className="item-info">
                <header>
                  <h4> {title} </h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;
