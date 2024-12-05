import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  Link,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Uvezi svoj logo ovde

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      {/* Navbar */}
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#F1D3CE", boxShadow: 1 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 8 }} // Prilagodi veličinu loga
            />
            <Typography variant="h5" component="h1">
              Modeli Boja
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              sx={{
                color: "black",
                textDecoration: "none",
                font: "roboto",
                cursor: "pointer",
              }}
              onClick={() => navigate("/history")}
            >
              Istorija Boja
            </Link>
            <Link
              sx={{
                color: "black",
                textDecoration: "none",
                font: "roboto",
                cursor: "pointer",
              }}
              onClick={() => navigate("/rgb")}
            >
              RGB
            </Link>
            <Link
              sx={{
                color: "black",
                font: "roboto",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate("/cmyk")}
            >
              CMYK
            </Link>
            <Link
              sx={{
                color: "black",
                textDecoration: "none",
                marginRight: "3rem",
                cursor: "pointer",
                font: "roboto",
              }}
              onClick={() => navigate("/yuv")}
            >
              YUV
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Layout Flexbox za Sidebar i Glavni sadržaj */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 250,
            backgroundColor: "#F1D3CE",
            padding: 2,
            boxShadow: 2, // Blaga senka
            display: "flex",
            flexDirection: "column",
            height: "100vh", // Postavljamo visinu na celu stranicu
          }}
        >
          {/* <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 8 }} // Prilagodi veličinu loga
            />
            <Typography variant="h5" component="h1">
              Modeli Boja
            </Typography>
          </Box> */}
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

        {/* Glavni sadržaj */}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, height: "100vh", overflowY: "auto" }}
        >
          {/* Prikaz stranica sa Outlet */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
