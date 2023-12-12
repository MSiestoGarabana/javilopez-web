import React from "react";
import { Card } from "@mui/material";
import "./SponsorCard.css";

const SponsorCard = ({ sponsorData, index, language }) => {
  const {
    nombreDeSponsor: sponsorName,
    cuerpoDeTextoSponsor: sponsorText,
    inglesCuerpoDeTextoDeSponsor: englishSponsorText,
    enlaceWebSponsor: sponsorURL,
    sponsorImage,
  } = sponsorData;
  function evenOrOdd() {
    if (index % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  console.log(index);
  return (
    <Card className={`sponsorCard__body`}>
      <a
        href={sponsorURL}
        className={`sponsorCard__linkContainer--${evenOrOdd()}`}
        target="_blank"
      >
        <img className="sponsorCard__image" src={sponsorImage} />
        <div className={`sponsorCard__container--info${evenOrOdd()}`}>
          <h3>{sponsorName}</h3>
          {language === "Spanish" ? (
            <p className="sponsorCard__container--text">{sponsorText}</p>
          ) : (
            <p>{englishSponsorText}</p>
          )}
        </div>
      </a>
    </Card>
  );
};

export default SponsorCard;
