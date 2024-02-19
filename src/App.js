import "./App.css";
import { Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

// PAGES
import HomePage from "./pages/HomePage";

export default function App() {
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
