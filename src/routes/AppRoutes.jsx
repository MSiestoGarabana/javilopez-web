import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import ProyectsListPage from "../pages/ProyectsListPage/ProyectsListPage";
import Sponsors from "../pages/Sponsors/Sponsors";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Proyectos" element={<ProyectsListPage />} />
      <Route path="/Sponsors" element={<Sponsors />} />
      <Route path="/Contacto" element={<Contact />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
