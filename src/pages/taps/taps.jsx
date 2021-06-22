import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./taps.scss";
const url = "https://course-api.com/react-tabs-project";
const TapsPage = () => {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const resopnse = await fetch(url);
    const newJob = await resopnse.json();
    setJob(newJob);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, date, duties, title } = job[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experince</h2>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
        {job.map((item, index) => {
            return(
            <button key={index}
            onClick={()=>setValue(index)}
            className={`button-navigation ${index === value && 'active-btn'}`}>
            {item.company}</button>
            )
        })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};
export default TapsPage;
