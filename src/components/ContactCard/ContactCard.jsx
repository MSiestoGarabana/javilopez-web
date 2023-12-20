import React from "react";
import { Card } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <Card className="contactCard__body">
      <div className="contactCard__mailCard">
        <MailIcon
          sx={{
            width: "3em",
            height: "3em",
          }}
          className="contactCard__icon"
        />
        <p>javiespinosa@sabway.es</p>
      </div>
      <div className="contactCard__instaCard">
        <a
          href="https://www.instagram.com/javitolopezz_"
          target="_blank"
          className="contactCard__instaLink"
        >
          <InstagramIcon
            sx={{
              width: "3em",
              height: "3em",
              color: "black",
            }}
            className="contactCard__icon"
          />
          <p className="contactCard__instaText">My instagram</p>
        </a>
      </div>
    </Card>
  );
};

export default ContactCard;
