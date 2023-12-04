import React from "react";
import welcomeBackgroundImage from "../../media/welcomeHomeBackground.jpg";
import "./WelcomeComponent.css";

const WelcomeComponent = () => {
  return (
    <div
      className="welcomeComponent__body"
      style={{
        backgroundImage: `url(${welcomeBackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center -90px",
      }}
    >
      <div className="welcomeComponent__container">
        <h1
          style={{
            width: "150px",
            textAlign: "right",
            borderRight: "3px solid white",
          }}
        >
          Javier López Espinosa
        </h1>
        <h2 style={{}}> E-Scooter Rider && Coach</h2>
      </div>
    </div>
  );
};

export default WelcomeComponent;
