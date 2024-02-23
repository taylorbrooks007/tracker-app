import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// PAGES
import HomePage from "./pages/HomePage";
import Luteal from "./pages/Luteal";
import Ovulatory from "./pages/Ovulatory";
import Menstural from "./pages/Menstrual";
import Follicular from "./pages/Follicular";

export default function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menstrual" element={<Menstural />} />
          <Route path="/Follicular" element={<Follicular />} />
          <Route path="/Ovulatory" element={<Ovulatory />} />
          <Route path="/Luteal" element={<Luteal />} />
        </Routes>
      </>
    </Router>
  );
}
