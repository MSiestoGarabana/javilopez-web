import React from "react";
import sponsorsImage from "../../media/sponsors.jpg";
import sponsorsBackground from "../../media/sponsorsBackground.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Sponsors.css";

//TODO: LOS NOMBRES DE ARCHIVO DE SPONSORS Y SPONSORSCARD DAN LUGAR A CONFUSIÓN
const Sponsors = ({ language }) => {
  return (
    <div className="sponsors__body">
      <div
        className="sponsors__container--image"
        style={{
          backgroundImage: `url(${sponsorsImage})`,
          backgroundSize: `cover`,
          backgroundPosition: "-170px",
        }}
      ></div>
      <div
        className="sponsors__container--text"
        style={{
          backgroundImage: `url(${sponsorsBackground})`,
          backgroundSize: `cover`,
        }}
      >
        {language === "Spanish" ? (
          <>
            <h2>
              "También tengo el placer de contar con dos sponsors que me han
              hecho posible evolucionar como rider profesional: Sabway y Rhoxs."
            </h2>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="proyects__link" to="/Sponsors">
                Sponsors
              </Link>
            </Button>
          </>
        ) : (
          <>
            <h2>
              "I also have the pleasure to count on two sponsors that have made
              it possible for me to made it possible for me to evolve as a
              professional rider: Sabway and Rhoxs."
            </h2>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="proyects__link" to="/Sponsors">
                Sponsors
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sponsors;
