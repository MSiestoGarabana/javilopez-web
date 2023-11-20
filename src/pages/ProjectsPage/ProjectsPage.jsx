import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import useContentful from "../../services/useContentful";
import "./ProjectsPage.css";

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
      <h1>My projects</h1>
      <hr />
      {projects?.map((project) => (
        <div key={project.projectTitle}>
          <h1>{project.projectTitle}</h1>
          <p className="project__description">{project.projectDescription}</p>
          {project.image ? (
            <img width={"100%"} src={project.image} alt="no image found" />
          ) : null}
        </div>
      ))}
    </Container>
  );
};

export default ProyectsPage;
