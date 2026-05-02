import React from "react";
import { Select, MenuItem } from "@mui/material";

const Filters = ({ type, setType }) => {
  return (
    <Select value={type} onChange={(e) => setType(e.target.value)}>
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Event">Event</MenuItem>
      <MenuItem value="Result">Result</MenuItem>
      <MenuItem value="Placement">Placement</MenuItem>
    </Select>
  );
};

export default Filters;