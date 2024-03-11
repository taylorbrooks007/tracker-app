import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div>
        <ul>
          <Link to="/" className="Home">
            Home
          </Link>
          <Link to="/Menstrual" className="Menstrual">
            Menstrual
          </Link>
          <Link to="/Follicular" className="Follicular">
            Follicular
          </Link>
          <Link to="/Ovulatory" className="Ovulatory">
            Ovulatory
          </Link>
          <Link to="/Luteal" className="Luteal">
            Luteal
          </Link>
        </ul>
      </div>
    </header>
  );
}
export default NavBar;
