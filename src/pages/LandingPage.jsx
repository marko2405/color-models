import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../PieChart.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" sx={{ color: "black" }} gutterBottom>
        Materijal za učenje
      </Typography>
      <Box
        sx={{
          width: 400,
          height: 400,
          position: "relative",
        }}
      >
        <div className="pie-chart">
          <div
            className="slice slice1"
            onClick={() => navigate("/presentation")}
          >
            <Typography className="label label1">PP Prezentacija</Typography>
          </div>
          <div className="slice slice2" onClick={() => navigate("/video")}>
            <Typography className="label label2">Video Objašnjenje</Typography>
          </div>
          <div className="slice slice3" onClick={() => navigate("/docs")}>
            <Typography className="label label3">Dokumentacija</Typography>
          </div>
          <div className="slice slice4" onClick={() => navigate("/quiz")}>
            <Typography className="label label4">Kviz</Typography>
          </div>
          <div className="slice slice5" onClick={() => navigate("/gallery")}>
            <Typography className="label label5">Galerija</Typography>
          </div>
          <div className="inner-circle"></div>
        </div>
      </Box>
    </Container>
  );
};

export default LandingPage;
