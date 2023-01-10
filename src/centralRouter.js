import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";

function CentralRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default CentralRouter;
