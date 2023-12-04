import React from "react";
import "./WelcomeComponent.css";
import welcomeBackgroundImage from "../../media/_L3A1123.jpg";

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
    ></div>
  );
};

export default WelcomeComponent;
