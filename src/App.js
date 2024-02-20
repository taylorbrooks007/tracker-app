import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// PAGES
import HomePage from "./pages/HomePage";
import Luteal from "./pages/Luteal";
import Ovulatory from "./pages/Ovulatory";

export default function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Luteal" element={<Luteal />} />
          <Route path="/Ovulatory" element={<Ovulatory />} />
        </Routes>
      </>
    </Router>
  );
}
