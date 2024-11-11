import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registration/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
