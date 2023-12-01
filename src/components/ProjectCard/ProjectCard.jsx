import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  console.log("hey");
  return (
    <div key={project.projectTitle}>
      <h1>{project.projectTitle}</h1>
      <p className="project__description">{project.projectDescription}</p>
      {project.image ? (
        <img width={"100%"} src={project.image} alt="no image found" />
      ) : null}
    </div>
  );
};

export default ProjectCard;
