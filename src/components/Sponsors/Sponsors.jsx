import React from "react";
import "./Sponsors.css";
import sponsorsImage from "../../media/sponsors.jpg";
import sponsorsBackground from "../../media/sponsorsBackground.jpg";

//TODO: LOS NOMBRES DE ARCHIVO DE SPONSORS Y SPONSORSCARD DAN LUGAR A CONFUSIÓN
const Sponsors = () => {
  return (
    <div className="sponsors__body">
      <div
        className="sponsors__container--text"
        style={{
          backgroundImage: `url(${sponsorsImage})`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div
        className="sponsors__container--image"
        style={{
          backgroundImage: `url(${sponsorsBackground})`,
          backgroundSize: `cover`,
        }}
      ></div>
    </div>
  );
};

export default Sponsors;
