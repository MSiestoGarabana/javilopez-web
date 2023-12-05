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
            padding: "10px",
          }}
        >
          Javier López Espinosa
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <h2> E-Scooter</h2>
          <h2 style={{}}>Rider & Coach</h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
