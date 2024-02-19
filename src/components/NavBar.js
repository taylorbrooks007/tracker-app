import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Luteal">Luteal</Link>
        </ul>
      </div>
    </header>
  );
}
export default NavBar;