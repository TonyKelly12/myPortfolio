import React, { useState } from "react";
import { useSpring, interpolate, animated as a } from "react-spring";

import "./styles.css";

function WorkCard(props) {
  

  return (
   
      <div>
        <h1>Job Experience</h1>
    <div className="container">
      <div className="product">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
        <div className="content">
          <div className="exercise"></div>
        </div>
        <span className="title">
          SS&C
          <span>Fullstack Developer</span>
        </span>
      </div>
      <div className="product">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
        <div className="content">
          <div className="sleep"></div>
        </div>
        <span className="title">
          Promise Zone
          <span>Mobile Development</span>
        </span>
      </div>
      <div className="product">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
        <div className="content">
          <div className="sleep"></div>
        </div>
        <span className="title">
          Jimbot
          <span>Fullstack Developer</span>
        </span>
      </div>
    </div>
    <div className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/fitriirl">@FITRIIRL</a></div>
      </div>
    
   
  );
}

export default WorkCard;
