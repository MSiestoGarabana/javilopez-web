import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import CheckMyProjects from "../../components/CheckMyProjects/CheckMyProjects";

const Home = () => {
  return (
    <div>
      <WelcomeComponent />
      <AboutMe />
      <CheckMyProjects />
    </div>
  );
};

export default Home;
