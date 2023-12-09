import React from "react";
import proyectsImage from "../../media/_MMS3220.jpg";
import proyectsBackgroundImage from "../../media/Riding.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Proyects.css";

const Proyects = () => {
  return (
    <div className="proyects__body">
      <div
        className="proyects__container--text"
        style={{
          backgroundImage: `url(${proyectsBackgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <h2>
          A lo largo de mi trayectoria en el mundo del e-scooter profesional he
          tenido el placer de colaborar en diferentes proyectos. He escogido
          participar en ellos porque creo que ayudan al scooter eléctrico a
          apuntar hacia un futuro más profesional, competitivo y sostenible.
        </h2>
        <h2>Puedes encontrarlos aquí</h2>
        <Button sx={{ my: 2, color: "white", display: "block" }}>
          <Link className="proyects__link" to="/Proyectos">
            Proyectos
          </Link>
        </Button>
      </div>
      <div
        className="proyects__container--image"
        style={{
          backgroundImage: `url(${proyectsImage})`,
          backgroundSize: "cover",
          backgroundPositionX: "-130px",
        }}
      ></div>
    </div>
  );
};

export default Proyects;
