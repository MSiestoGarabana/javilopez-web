import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import useContentful from "../../services/useContentful";
const ProyectsListPage = () => {
  const [proyects, setProyects] = useState([]);
  const { getProyects } = useContentful();
  useEffect(() => {
    getProyects()
      .then((response) => {
        setProyects(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1>My proyects</h1>
      <hr />
      {proyects.map((proyect, index) => (
        <div key={proyect.proyectName}>
          <h1>{proyect.proyectName}</h1>
          <p>{proyect.proyectDescription}</p>
          <img
            width={"100%"}
            src={proyect.projectImage.fields.file.url}
            alt="no image found"
          />
        </div>
      ))}
    </Container>
  );
};

export default ProyectsListPage;
