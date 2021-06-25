import React from "react";
import TourItem from "../tour-item/tour-item";

import "./tour-preview.scss";

const TourPreview = ({ tours, removeTour }) => {
  return (
    <div className="tour-page">
      <section className="section">
        <div className="title">
          <h2>Our Tour</h2>
        </div>
        <div>
          {tours.map((tour) => {
            return <TourItem key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    </div>
  );
};
export default TourPreview;
