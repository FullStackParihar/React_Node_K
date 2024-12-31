import React from "react";
import "./Banner.css"; 

const Slider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <div className="slide slide-1"></div>
        <div className="slide slide-2"></div>
        <div className="slide slide-3"></div>
      </div>
      <div className="indicators">
        <div className="indicator"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default Slider;
