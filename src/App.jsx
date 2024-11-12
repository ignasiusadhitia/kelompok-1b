import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Blog,
  Contact,
  Home,
  NotFound,
  OurServices,
  Portfolio,
} from "./pages";
import Example from "./pages/Example";

const App = () => {
  return (
    // To minimize risk of breaking changes, and future updates on react-router-dom v7
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* <Example /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
