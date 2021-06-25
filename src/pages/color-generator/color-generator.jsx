import React, { useState } from "react";

import Values from "values.js";

import "./color-generator.scss";
import SingleColor from "./single-color";

const ColorGenratorPage = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#333").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="color-page">
      <section className="section-color">
        <div className="container">
          <h3>Color</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={color}
              onChange={(e) => {
                if (e.target.value.charAt(0) !== "#") {
                  setColor("#" + e.target.value);
                  return;
                }
                setColor(e.target.value);
              }}
              placeholder=""
              className={`${error} ? 'error' : null`}
            />
            <button className="btn">Submit</button>
          </form>
        </div>
        <section className="colors">
          {list.map((color, id) => {
            return (
              <SingleColor
                key={id}
                {...color}
                index={id}
                hexColor={color.hex}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
};
export default ColorGenratorPage;
