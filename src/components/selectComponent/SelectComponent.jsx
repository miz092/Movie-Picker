import React from "react";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

function SelectComponent({ label, value, setValue, values }) {
  const menuItemStyles = {
    background: "#023047",
    color: "#fff",
    "&:hover": {
      background: "#fff",
      color: "#023047",
    },
    "&:focus": {
      color: "#023047",
    },
  };

  return (
    <div className="inputContainer">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ color: "white" }}>{label}</InputLabel>
        <Select
          sx={{ color: "white" }}
          className="input"
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
        >
          {values.map((genre) => (
            <MenuItem
              sx={menuItemStyles}
              key={genre.description}
              value={genre.description.toLowerCase()}
            >
              {genre.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectComponent;
