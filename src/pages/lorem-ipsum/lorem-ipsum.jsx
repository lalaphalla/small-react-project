import React, { useState } from "react";

import data from "./data";
import "./lorem-ipsum.scss";

const LoremIpsumPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if(amount <= 0){
        amount = 1
    }
    setText(data.slice(0,amount))
  };
  
  return (
    <section className="section-lorem">
      <h3>Text Generator</h3>
      <form action="submit" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph: </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text"> 
        {text.map((item,index)=> {
            return <p> {item} </p>
        })}
      </article>
    </section>
  );
};
export default LoremIpsumPage;
