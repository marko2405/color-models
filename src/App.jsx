import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PresentationPage from "./pages/PresentationPage";
import VideoPage from "./pages/VideoPage";
import DocsPage from "./pages/DocsPage";
import QuizPage from "./pages/QuizPage";
import GalleryPage from "./pages/GalleryPage";
import Sidebar from "./layout/Sidebar";
import { Box } from "@mui/material";
import CmykPage from "./pages/CmykPage";
import YuvPage from "./pages/YuvPage";
import RgbPage from "./pages/RgbPage";
function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/rgb" element={<RgbPage />} />
            <Route path="/cmyk" element={<CmykPage />} />
            <Route path="/yuv" element={<YuvPage />} />
            <Route path="/presentation" element={<PresentationPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
