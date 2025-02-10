import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Ensure correct path
import Clientele from "./components/Clientele"; // Ensure correct path
import Home from "./components/Home"; // Replace with actual component
 // Replace with actual component
 import PurifiersPage from "./components/PurifiersPage";
 import Contact from "./components/Contact";
 import About from "./components/About";// Replace with actual component
 // Replace with actual component
 import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/purifiers" element={<PurifiersPage />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
