import React from "react";

import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import "./index.css";
import AboutUs from "./components/Navbar Components/About_Us";
import Acheivers from "./components/Navbar Components/Acheivers";
import Navbar from "./components/Homepage/Navbar";
import Footer from "./components/Homepage/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/acheivers" element={<Acheivers/>} />
      </Routes>
      <Footer/>
    </Router>
    
  </React.StrictMode>
);
