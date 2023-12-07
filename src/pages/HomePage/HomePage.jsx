import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import Proyects from "../../components/Proyects/Proyects";
import Sponsors from "../../components/Sponsors/Sponsors";

const Home = () => {
  return (
    <div>
      <WelcomeComponent />
      <AboutMe />
      <Proyects />
      <Sponsors />
    </div>
  );
};

export default Home;
