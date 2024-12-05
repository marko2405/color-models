import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PresentationPage from "./pages/PresentationPage";
import VideoPage from "./pages/VideoPage";
import DocsPage from "./pages/DocsPage";
import QuizPage from "./pages/QuizPage";
import GalleryPage from "./pages/GalleryPage";
import Layout from "./layout/Layout";
import { Box } from "@mui/material";
import CmykPage from "./pages/CmykPage";
import YuvPage from "./pages/YuvPage";
import RgbPage from "./pages/RgbPage";
import HistoryPage from "./pages/HistoryPage";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout kao roditelj za sve stranice */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="rgb" element={<RgbPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="cmyk" element={<CmykPage />} />
          <Route path="yuv" element={<YuvPage />} />
          <Route path="presentation" element={<PresentationPage />} />
          <Route path="video" element={<VideoPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
