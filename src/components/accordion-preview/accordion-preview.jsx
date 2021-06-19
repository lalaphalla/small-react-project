import React from "react";
import data from "./data";
import AccordionItem from '../accordion-item/accordion-item'

import "./accordion-preview.scss";


const AccordionPreview = () => {
  return (
    <section className="info">
        {data.map((question) => {
          return <AccordionItem key={question.id} {...question} question={question} />;
        })}
    </section>
  );
};

export default AccordionPreview;
