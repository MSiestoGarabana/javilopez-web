import React from "react";
import "./SponsorCard.css";

const SponsorCard = ({ sponsorData }) => {
  const { nombreDeSponsor, cuerpoDeTextoSponsor, sponsorImage } = sponsorData;
  console.log(nombreDeSponsor, cuerpoDeTextoSponsor, sponsorImage);
  return <div>SponsorCard</div>;
};

export default SponsorCard;
