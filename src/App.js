import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
