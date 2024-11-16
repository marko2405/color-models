import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Uvezi svoj logo ovde

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "#F1D3CE",
        padding: 2,
        boxShadow: 2, // Blaga senka
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: 40, height: 40, marginRight: 8 }} // Prilagodi veličinu loga
        />
        <Typography variant="h5" component="h1">
          Modeli Boja
        </Typography>
      </Box>
      <List sx={{ cursor: "pointer" }}>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemText primary="Početna" />
        </ListItem>
        <ListItem button onClick={() => navigate("/presentation")}>
          <ListItemText primary="PP Prezentacija" />
        </ListItem>
        <ListItem button onClick={() => navigate("/video")}>
          <ListItemText primary="Video Lekcija" />
        </ListItem>
        <ListItem button onClick={() => navigate("/docs")}>
          <ListItemText primary="Dokumentacija" />
        </ListItem>
        <ListItem button onClick={() => navigate("/quiz")}>
          <ListItemText primary="Kviz" />
        </ListItem>
        <ListItem button onClick={() => navigate("/gallery")}>
          <ListItemText primary="Galerija" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
