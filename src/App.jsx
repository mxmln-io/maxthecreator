import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from 'smooth-scroll';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Timeline } from "./components/timeline";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { FAQ } from "./components/faq"; // Import your FAQ component
import { Blog } from "./components/blog"; // Import your Blog component
import JsonData from "./data/data.json";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return ( 
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Timeline data={landingPageData.Timeline} />
            <Gallery data={landingPageData.Gallery} />
            <Contact data={landingPageData.Contact} />
          </>
        } />
        <Route path="/faq" element={<FAQ />} /> {/* Route for FAQ page */}
        <Route path="/blog" element={<Blog />} /> {/* Route for Blog page */}
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
};

export default App;
