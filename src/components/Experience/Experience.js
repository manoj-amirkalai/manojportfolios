import React from "react";
import { Element } from "react-scroll";
import Experiencebox from "../Experiencebox/Experiencebox";
import "./Experience.css";

const Experience = () => {
  return (
    <Element className="experience" name="experience">
      <h1>Experience</h1>
      <div className="experience1">
        <Experiencebox number="1+ year" title="as SOFTWARE ENGINEER(TCS)" />
        <Experiencebox
          number="9+ month"
          title="FRONT-END DEVELOPER"
          style={{ backgroundColor: "rgba(240, 241, 176, 0.777)" }}
        />
      </div>
    </Element>
  );
};

export default Experience;
