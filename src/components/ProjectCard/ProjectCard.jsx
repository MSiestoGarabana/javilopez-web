import React from "react";
import { Card } from "@mui/material";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <Card className="proyectCard__body">
      <h1 className="projectCard__title">{project.projectTitle}</h1>
      <p className="projectCard__description">{project.projectDescription}</p>
      {project.image ? (
        <img width={"100%"} src={project.image} alt="no image found" />
      ) : null}
    </Card>
  );
};

export default ProjectCard;
