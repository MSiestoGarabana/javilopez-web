import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import Proyects from "../../components/Proyects/Proyects";
import Sponsors from "../../components/Sponsors/Sponsors";

const Home = ({ language }) => {
  console.log(language);
  return (
    <div>
      <WelcomeComponent language={language} />
      <AboutMe language={language} />
      <Proyects language={language} />
      <Sponsors language={language} />
    </div>
  );
};

export default Home;
