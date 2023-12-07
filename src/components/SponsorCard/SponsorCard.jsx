import React from "react";
import { Card } from "@mui/material";
import "./SponsorCard.css";

const SponsorCard = ({ sponsorData, index }) => {
  const {
    nombreDeSponsor: sponsorName,
    cuerpoDeTextoSponsor: sponsorText,
    sponsorImage,
  } = sponsorData;

  function evenOrOdd() {
    if (index % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

  return (
    <Card className={`sponsorCard__body--${evenOrOdd()}`}>
      <img className="sponsorCard__image" src={sponsorImage} />
      <div className={`sponsorCard__textContainer--${evenOrOdd()}`}>
        <h3>{sponsorName}</h3>
        <p>{sponsorText}</p>
      </div>
    </Card>
  );
};

export default SponsorCard;
