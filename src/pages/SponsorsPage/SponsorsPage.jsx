import React, { useState, useEffect } from "react";
import useContentful from "../../services/useContentful";
import SponsorCard from "../../components/SponsorCard/SponsorCard";

const Sponsors = () => {
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
    <div>
      <p>hey</p>
      {sponsors.map((sponsor) => (
        <SponsorCard sponsorData={sponsor} key={sponsor.nombreDeSponsor} />
      ))}
    </div>
  );
};

export default Sponsors;
