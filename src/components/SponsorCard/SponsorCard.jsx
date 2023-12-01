import React from "react";
import "./SponsorCard.css";

const SponsorCard = ({ sponsorData, index }) => {
  const { nombreDeSponsor, cuerpoDeTextoSponsor, sponsorImage } = sponsorData;
  console.log(nombreDeSponsor, cuerpoDeTextoSponsor, sponsorImage, index);
  return (
    <div>
      SponsorCard
      <p>{index}</p>
    </div>
  );
};

export default SponsorCard;
