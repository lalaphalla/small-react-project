import React, { useState } from "react";
import List from "../../components/list/list";

import "./grocery-bud.scss";

const GroceryBudPage = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //alert
    } else if (name && isEditing) {
    } else {
      //alert
      const newItem = { id: new Date().getTime.toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  return (
    <section className="grocery-page">
      <section className="section-center">
        <form onSubmit={handleSubmit} className="form-control">
          <input
            type="text"
            className="grocery"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </form>
        <div className="grocery-container">
          <List items={list} />
        </div>
      </section>
    </section>
  );
};

export default GroceryBudPage