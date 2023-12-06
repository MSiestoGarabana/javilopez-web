import React from "react";
import background from "../../media/background.jpg";
import ContactCard from "../../components/ContactCard/ContactCard";
import "./ContactPage.css";

const Contact = () => {
  return (
    <div
      className="contactPage__body"
      style={{ backgroundImage: `url(${background})` }}
    >
      <ContactCard />
    </div>
  );
};

export default Contact;
