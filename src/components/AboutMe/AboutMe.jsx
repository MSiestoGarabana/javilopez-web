import React from "react";
import aboutMeBackground from "../../media/aboutMeBackground.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = ({ language }) => {
  return (
    <div
      className="aboutMe__body"
      style={{
        backgroundImage: `url(${aboutMeBackground})`,
        backgroundSize: "cover",
      }}
    >
      {language === "Spanish" ? (
        <p className="aboutMe__textContainer">
          "En 2019 me adentré en el mundo del e-scooter competitivo, un viaje
          que transformó mi vida. Como apasionado piloto y entrenador, no solo
          he alcanzado victorias sino que también he compartido mi pasión con
          entusiastas aspirantes, forjando una comunidad de hábiles conductores.
          Me enorgullece contar con el patrocinio de tres marcas innovadoras:
          Sabway, Ambrosinni e-racing y Rhoxs. Estas asociaciones van más allá
          del respaldo financiero; representan un compromiso compartido con la
          excelencia, la innovación y el progreso en el dinámico panorama de la
          micromovilidad. Con Sabway, Ambrosinni e-racing y Rhoxs a mi lado,
          navego por las corrientes de la revolución de la micromovilidad,
          empujando los límites de la velocidad, la sostenibilidad y la
          emocionante adrenalina de la carretera abierta. Acompáñame en este
          viaje mientras redefinimos el futuro del e-scooter competitivo, una
          emocionante carrera a la vez."
        </p>
      ) : (
        <p className="aboutMe__textContainer">
          "In 2019 I entered the world of competitive e-scootering, a journey
          that transformed my life. As a passionate rider and coach, I have not
          only achieved victories but also shared my passion with enthusiastic
          challengers, forging enthusiastic challengers, forging a community of
          skilled riders. I am proud to have the sponsorship of three innovative
          brands: Sabway, Ambrosinni e-racing and Rhoxs. These partnerships go
          beyond financial financial backing; they represent a shared commitment
          to excellence, innovation and progress in the dynamic landscape of
          micro-mobility. landscape. With Sabway, Ambrosinni e-racing and Rhoxs
          by my side, I navigate the currents of the micro-mobility revolution,
          pushing the limits of speed, sustainability and the thrilling
          adrenaline of the open road. thrilling adrenaline of the open road.
          Join me on this journey as we redefine the future of competitive
          e-scootering one thrilling ride at a time."
        </p>
      )}
      <Button sx={{ my: 2, color: "white", display: "block" }}>
        {language === "Spanish" ? (
          <Link className="aboutMe__link" to="/Contacto">
            Contacta conmigo
          </Link>
        ) : (
          <Link className="aboutMe__link" to="/Contacto">
            Contact me
          </Link>
        )}
      </Button>
    </div>
  );
};

export default AboutMe;
