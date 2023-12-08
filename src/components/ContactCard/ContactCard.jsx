import React from "react";
import { Card } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <Card className="contactCard__body">
      <div className="contactCard__mailCard">
        <MailIcon />
        <p>javiespinosa@sabway.es</p>
      </div>
      <div className="contactCard__instaCard">
        <InstagramIcon />
        <a href="https://www.instagram.com/javitolopezz_" target="_blank">
          My instagram
        </a>
      </div>
    </Card>
  );
};

export default ContactCard;
