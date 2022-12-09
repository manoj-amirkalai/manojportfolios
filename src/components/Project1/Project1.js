import React, { useState } from "react";
import "./Project1.css";

const Project1 = ({ img,time,name,title, desc, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link}>
      <div
        className="project1"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className="project1content">
            <h2>{title}</h2>
            <h4>{time}</h4>
            <h3>{name}</h3>
            <p>{desc}</p>

          </div>
        ) : (
          <img src={img} alt="" />
        )}
      </div>
    </a>
  );
};

export default Project1;
