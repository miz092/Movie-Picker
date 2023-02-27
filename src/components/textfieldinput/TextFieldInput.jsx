import React from "react";
import { TextField } from "@mui/material";
import "./TextFieldInput.css";

function TextFieldInput({ value, setValue, type, label, width }) {
  return (
    <TextField
      className="input"
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label={label}
      variant="outlined"
      InputLabelProps={{
        style: { color: "white" },
      }}
      InputProps={{
        style: { color: "white" },
      }}
      sx={{ width: { width }, m: 1.5 }}
    />
  );
}

export default TextFieldInput;
