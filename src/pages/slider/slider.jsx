import React, { useState } from "react";
import peopleData from "./data";
import './slider.scss'

const SliderPage = () => {
  const [people, setPeople] = useState(peopleData);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Review
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={index}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default SliderPage;
