import React, { useState, useEffect } from "react";
import useContentful from "../../services/useContentful";

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

  return <div>Sponsors</div>;
};

export default Sponsors;
