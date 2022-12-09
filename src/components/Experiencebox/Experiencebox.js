import React from "react";
import "./Experiencebox.css";

const Experiencebox = ({ number, title, style }) => {
  return (
    <div style={{ ...style }} className="experiencebox">
      <h3>{number}</h3>
      <p>{title}</p>
    </div>
  );
};

export default Experiencebox;
