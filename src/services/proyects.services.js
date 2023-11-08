import axios from "axios";

class ProyectService {
  constructor() {
    this.api = axios.create({
      /* baseURL: `${process.env.VITE_API_URL}/proyects `, */
      baseURL: "http://localhost:5005/api/proyects",
    });
    console.log(process.env.VITE_API_URL);
  }

  getAllProyects() {
    return this.api.get("/getAllProyects");
  }
  getOneProyect(proyect_id) {
    return this.api.get(`/getOneProyect/${proyect_id}`);
  }
  saveProyect(proyectData) {
    return this.api.post("/saveProyect", proyectData);
  }
}

const proyectsService = new ProyectService();

export default proyectsService;
