import React from "react";
import { Link } from "react-router-dom";

import "./styles/PageNotFound.css";

import NotFoundImage from "../images/404.jpg";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__Text">
        <h1>Esta página no existe 💀</h1>
        <br />
        <h2>Al menos no en este universo...</h2>
      </div>
      <figure>
        <img className="PageNotFound__Image" src={NotFoundImage} alt="Página no encontrada" />
      </figure>
    </div>
  );
}

export default PageNotFound;
