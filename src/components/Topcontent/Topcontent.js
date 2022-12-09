import React from "react";
import "./Topcontent.css";
import { Button } from "@material-ui/core";

const Topcontent = () => {
  return (
    <div className="Topcontent">
      <div className="Topcontent-container">
        <div class="word-waves">
          <span>Manoj.A</span>
          <span>Manoj.A</span>
          <span>&#128747;</span>
        </div>

        <p className="text">Front-End Developer</p>
        <a href="https://drive.google.com/file/d/1m4r6OOBFvd3dr6a9l5nRU_l4eFYw3TlJ/view?usp=share_link">
          {" "}
          <Button variant="contained" className="downloadcv">
            Download my cv
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Topcontent;
