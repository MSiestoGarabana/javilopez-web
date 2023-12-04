import React from "react";
import "./AboutMe.css";
import aboutMeBackground from "../../media/aboutMeBackground.jpg";

const AboutMe = () => {
  return (
    <div
      className="aboutMe__container"
      style={{
        backgroundImage: `url(${aboutMeBackground})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default AboutMe;
