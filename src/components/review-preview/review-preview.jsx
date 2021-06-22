import React, { useState } from "react";
import people from "./data";

import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

import "./review-preview.scss";

const ReviewPreview = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;

  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)
        //randomNumber === index ? randomNumber ++ : 
      setIndex(randomNumber)
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job"> {job} </p>
      <p className="info"> {text} </p>
      <div className="button-container">
        <button className="pre-btn" onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson}>Suprise Me</button>
    </article>
  );
};

export default ReviewPreview;
