import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FormControl, FormLabel } from "@mui/material";

const NewProyectForm = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Nombre del nuevo proyecto</FormLabel>
        <TextField></TextField>
        <Button>Submit</Button>
        <input type="file"></input>
      </FormControl>
    </div>
  );
};

export default NewProyectForm;
