import React from "react";
import { Typography, Box } from "@mui/material";

const PresentationPage = () => (
  <Box sx={{ textAlign: "center", marginTop: "0vh" }}>
    <object
      type="application/pdf"
      data="src\assets\pdf\modeli_boja.pdf"
      width="100%"
      height="800"
    ></object>
  </Box>
);

export default PresentationPage;
