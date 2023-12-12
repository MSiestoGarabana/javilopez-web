import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import SponsorsPage from "../pages/SponsorsPage/SponsorsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const AppRoutes = ({ language }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage language={language} />} />
      <Route path="/Proyectos" element={<ProjectsPage />} />
      <Route path="/Sponsors" element={<SponsorsPage />} />
      <Route path="/Contacto" element={<ContactPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
