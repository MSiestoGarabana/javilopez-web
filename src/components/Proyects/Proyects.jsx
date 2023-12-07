import React from "react";
import proyectsImage from "../../media/_MMS3220.jpg";
import proyectsBackgroundImage from "../../media/Riding.jpg";
import "./Proyects.css";

const Proyects = () => {
  return (
    <div className="proyects__body">
      <div
        className="proyects__container--text"
        style={{
          backgroundImage: `url(${proyectsBackgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        proyects
      </div>
      <div
        className="proyects__container--image"
        style={{
          backgroundImage: `url(${proyectsImage})`,
          backgroundSize: "cover",
          backgroundPositionX: "-130px",
        }}
      ></div>
    </div>
  );
};

export default Proyects;
