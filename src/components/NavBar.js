import React from "react";
import { Link } from "react-router-dom";

import "./styles/NavBar.css";

function Navbar() {
  return (
    <div className="NavBar">
      <Link to="/" className="NavBar__ref">
        Home
      </Link>
      <Link to="#" className="NavBar__ref">
        Favorites
      </Link>
      <Link to="#" className="NavBar__ref font-weight-bold">
        Log In
      </Link>
    </div>
  );
}

export default Navbar;
