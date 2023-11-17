import React, { useState, useEffect } from "react";
import useContentful from "../../services/useContentful";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  console.log(sponsors);

  const { getSponsors } = useContentful();
  useEffect(() => {
    getSponsors()
      .then((data) => {
        setSponsors(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>Sponsors</div>;
};

export default Sponsors;
