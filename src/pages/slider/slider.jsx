import React, { useEffect, useState } from "react";
import {FiChevronLeft ,FiChevronRight} from 'react-icons/fi'
import peopleData from "./data";
import './slider.scss'

const SliderPage = () => {
  const [people, setPeople] = useState(peopleData);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = people.length - 1
    if(index < 0){
      setIndex(lastIndex)
    }if( index > lastIndex ){
      setIndex(0)
    }
  },[index, people])
  useEffect(()=>{
    let slider = setInterval(()=>{
    setIndex(index+1)
    },3000)
    return ()=> clearInterval(slider)
  },[index])
  return (
    <section className="section-slider">
      <div className="title">
        <h2>
          <span>/</span>Review
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
         if ( personIndex === index - 1 || 
           index === 0 && personIndex === people.length - 1) {
             position = 'lastSlide'
           }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={()=>setIndex(index - 1)}> <FiChevronLeft /> </button>
        <button className="next" onClick={()=>setIndex(index + 1)}><FiChevronRight /></button>
      </div>
    </section>
  );
};
export default SliderPage;
