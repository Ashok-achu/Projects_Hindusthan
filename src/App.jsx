import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Scrolling from "./pages/Scrolling";
import About from "./pages/About";
import CampusLife from "./pages/CampusLife";
import OurRecruiters from "./pages/Recruiters";
import Collegeshow from "./pages/collegeshow";
import Course from "./pages/Course"; // ✅ Ensure correct capitalization
import Contact from "./pages/Runningcounter";
import About2 from "./pages/AboutInstitution";
import Trust from "./pages/Trust";
import IconCarousel from "./pages/IconsCarousel";
import NewsCarousel from "./pages/NewsCarousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Scrolling />
      <Collegeshow />
      <Contact />
      <About />
      <IconCarousel />
      <About2 />
      <NewsCarousel />
      <CampusLife />
      <OurRecruiters />
      <Footer />
    </>
  );
};

export default App;
