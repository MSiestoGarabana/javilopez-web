import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import useContentful from "../../services/useContentful";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import background from "../../media/background.jpg";

import "./ProjectsPage.css";

const ProyectsPage = ({ language }) => {
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
    <div
      className="projectPage__body"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Container>
    </div>
  );
};

export default ProyectsPage;
