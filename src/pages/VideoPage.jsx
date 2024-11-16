import React from "react";
import { Box } from "@mui/material";

const VideoPage = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>Video Lekcija</h1>
      <video width="800" height="400" controls style={{ borderRadius: "8px" }}>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPage;
