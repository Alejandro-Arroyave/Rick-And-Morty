import React from "react";
import { Link } from "react-router-dom";

import "./styles/NavBar.css";

function Navbar() {
  return (
    <div className="NavBar">
      <Link to="/" className="NavBar__ref">
        Inicio
      </Link>
      <Link to="#" className="NavBar__ref">
        Favoritos
      </Link>
      <Link to="#" className="NavBar__ref font-weight-bold">
        Iniciar sesión
      </Link>
    </div>
  );
}

export default Navbar;
