import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import Sponsors from "../../components/Sponsors/Sponsors";

const Home = ({ language }) => {
  console.log(language);
  return (
    <div>
      <WelcomeComponent language={language} />
      <AboutMe language={language} />
      <HomeProjects language={language} />
      <Sponsors language={language} />
    </div>
  );
};

export default Home;
