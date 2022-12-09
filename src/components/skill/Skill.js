import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Skill.css";

const Skill = () => {
  return (
    <Element className="skill" id="skills">
      <div className="skillimg">
        <img
          src="https://images.unsplash.com/photo-1643135795004-fc2234a62549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          alt="skills.jpg"
        />
      </div>
      <div className="skillknown">
        <div className="skill">
          <h2 className="skills">Skills</h2>
        </div>
        <div className="skillknownpercentage">
          <h4>HTML</h4>
          <div className="react htmlper">
            <LinearProgress variant="determinate" value={65} />
          </div>
          <h4>CSS</h4>
          <div className="react cssper">
            <LinearProgress variant="determinate" value={65} />
          </div>
          <h4>React.js</h4>
          <div className="react reactper">
            <LinearProgress variant="determinate" value={60} />
          </div>
          <h4>Node.js</h4>
          <div className="react nodeper">
            <LinearProgress variant="determinate" value={25} />
          </div>
          <h4>Express.js</h4>
          <div className="react expressper">
            <LinearProgress variant="determinate" value={25} />
          </div>
          <h4>JavaScript</h4>
          <div className="react jsper">
            <LinearProgress variant="determinate" value={60} />
          </div>
          <h4>JAVA</h4>
          <div className=" javaper">
            <LinearProgress variant="determinate" value={35} />
          </div>
          <h4>Python</h4>
          <div className="react pythonper">
            <LinearProgress variant="determinate" value={35} />
          </div>
          <h4>C</h4>
          <div className="react cper">
            <LinearProgress variant="determinate" value={25} />
          </div>
          <h4>C++</h4>
          <div className="react cpper">
            <LinearProgress variant="determinate" value={25} />
          </div>
          <h4>Catia V5</h4>
          <div className="react catiaper">
            <LinearProgress variant="determinate" value={35} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skill;
