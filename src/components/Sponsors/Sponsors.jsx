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
              A lo largo de mi trayectoria en el mundo del e-scooter profesional
              he tenido el placer de colaborar en diferentes proyectos. He
              escogido participar en ellos porque creo que ayudan al scooter
              eléctrico a apuntar hacia un futuro más profesional, competitivo y
              sostenible.
            </h2>
            <h2>Puedes encontrarlos aquí</h2>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="proyects__link" to="/Sponsors">
                Sponsors
              </Link>
            </Button>
          </>
        ) : (
          <>
            {" "}
            <h2>
              "Throughout my career in the professional e-scooter world I have
              had the pleasure of collaborating in different projects. I have
              chosen to participate in them because I believe they help the
              electric scooter to point towards a more professional, competitive
              and sustainable future."
            </h2>
            <h2>Puedes encontrarlos aquí</h2>
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
