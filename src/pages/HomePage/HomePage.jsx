import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";
import ContactLinkComponent from "../../components/ContactLinkComponent/ContactLinkComponent";

const Home = () => {
  return (
    <div>
      <WelcomeComponent />
      <AboutMe />
      <ContactLinkComponent />
    </div>
  );
};

export default Home;
