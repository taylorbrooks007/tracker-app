import "./App.css";
import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NavBar from "./components/NavBar";
import Moment from "react-moment";
import "./style.css";

// PAGES
import HomePage from "./pages/HomePage";

export default function App() {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState("28");

  const date = value;
  // console.log(cycle);
  const cycleLength = parseInt(cycle);

  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    </Router>
  );
}
