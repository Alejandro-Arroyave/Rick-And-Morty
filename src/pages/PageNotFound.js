import React from "react";
import { Link } from "react-router-dom";

import "./styles/PageNotFound.css";

import Emoji from "../components/Emoji";

import NotFoundImage from "../images/404.jpg";

function PageNotFound() {
  return (
    <div>
      <div className="PageNotFound col-11">
        <div className="PageNotFound__Text">
          <h1>This page doesn't exist <Emoji symbol="💀"/></h1>
          <br />
          <h2>Not in this universe...</h2>
        </div>
        <figure>
          <img
            className="PageNotFound__Image"
            src={NotFoundImage}
            alt="Página no encontrada"
          />
        </figure>
      </div>
      <div className="PageNotFound__Button"> 
        <Link to="/" className="btn btn-normal">
          &#60; Back to home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
