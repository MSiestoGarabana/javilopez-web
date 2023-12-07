import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import ProyectsAndSponsors from "../../components/ProyectsAndSponsors/ProyectsAndSponsors";

const Home = () => {
  return (
    <div>
      <WelcomeComponent />
      <AboutMe />
      <ProyectsAndSponsors />
    </div>
  );
};

export default Home;
