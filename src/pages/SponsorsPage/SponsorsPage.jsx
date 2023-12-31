import React, { useState, useEffect } from "react";
import useContentful from "../../services/useContentful";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import background from "../../media/background.jpg";
import "./SponsorPage.css";

const Sponsors = ({ language }) => {
  const [sponsors, setSponsors] = useState([]);

  const { getSponsors } = useContentful();
  useEffect(() => {
    getSponsors()
      .then((data) => {
        setSponsors(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="sponsorPage__body"
      style={{ backgroundImage: `url(${background})` }}
    >
      {sponsors.map((sponsor, index) => (
        <SponsorCard
          language={language}
          sponsorData={sponsor}
          index={index + 1}
          key={sponsor.nombreDeSponsor}
        />
      ))}
    </div>
  );
};

export default Sponsors;
