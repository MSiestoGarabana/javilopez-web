import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import ProyectsPage from "../pages/ProyectsPage/ProyectsPage";
import SponsorsPage from "../pages/SponsorsPage/SponsorsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutMe" element={<AboutMePage />} />
      <Route path="/Proyectos" element={<ProyectsPage />} />
      <Route path="/Sponsors" element={<SponsorsPage />} />
      <Route path="/Contacto" element={<ContactPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
