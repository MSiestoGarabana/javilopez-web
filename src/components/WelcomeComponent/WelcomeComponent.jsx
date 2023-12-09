import React from "react";
import welcomeBackgroundImage from "../../media/welcomeHomeBackground.jpg";
import "./WelcomeComponent.css";

const WelcomeComponent = () => {
  const isMobile = window.innerWidth <= 600;
  console.log(isMobile);

  const styles = {
    backgroundImage: `url(${welcomeBackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: isMobile ? "-350px -50px" : "center -90px",
  };

  return (
    <div className="welcomeComponent__body" style={styles}>
      <div className="welcomeComponent__container--text">
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
          <h2 style={{ width: "100%", margin: "1%" }}>Rider & Coach</h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
