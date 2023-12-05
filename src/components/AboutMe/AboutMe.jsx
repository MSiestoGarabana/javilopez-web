import React from "react";
import aboutMeBackground from "../../media/aboutMeBackground.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div
      className="aboutMe__body"
      style={{
        backgroundImage: `url(${aboutMeBackground})`,
        backgroundSize: "cover",
      }}
    >
      <p className="aboutMe__textContainer">
        "En 2019 me adentré en el mundo del e-scooter competitivo, un viaje que
        transformó mi vida. Como apasionado piloto y entrenador, no solo he
        alcanzado victorias sino que también he compartido mi pasión con
        entusiastas aspirantes, forjando una comunidad de hábiles conductores.
        Me enorgullece contar con el patrocinio de tres marcas innovadoras:
        Sabway, Ambrosinni e-racing y Motorheads. Estas asociaciones van más
        allá del respaldo financiero; representan un compromiso compartido con
        la excelencia, la innovación y el progreso en el dinámico panorama de la
        micromovilidad. Con Sabway, Ambrosinni e-racing y Motoheads a mi lado,
        navego por las corrientes de la revolución de la micromovilidad,
        empujando los límites de la velocidad, la sostenibilidad y la
        emocionante adrenalina de la carretera abierta. Acompáñame en este
        emocionante viaje mientras redefinimos el futuro de las carreras de
        scooters eléctricos, una emocionante travesía a la vez."
      </p>
      <Button sx={{ my: 2, color: "white", display: "block" }}>
        <Link className="aboutme__link" to="/Contacto">
          Contacta conmigo
        </Link>
      </Button>
    </div>
  );
};

export default AboutMe;
