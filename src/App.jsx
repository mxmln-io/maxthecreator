import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import {Appointments} from "./components/Appointments"
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
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
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Appointments data={landingPageData.Appointments} />
      <Portfolio data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
