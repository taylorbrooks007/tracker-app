import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Menstrual">Menstrual</Link>
          <Link to="/Follicular">Follicular</Link>
          <Link to="/Ovulatory">Ovulatory</Link>
          <Link to="/Luteal">Luteal</Link>
        </ul>
      </div>
    </header>
  );
}
export default NavBar;
