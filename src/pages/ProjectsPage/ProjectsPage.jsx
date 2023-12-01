import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import useContentful from "../../services/useContentful";
import "./ProjectsPage.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProyectsPage = () => {
  const [projects, setProjects] = useState([]);
  const { getProjects } = useContentful();

  useEffect(() => {
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="project__container">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </Container>
  );
};

export default ProyectsPage;
