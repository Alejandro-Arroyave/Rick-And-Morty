import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Firebase/Session";
import * as ROUTES from "../constants/Routes";

import LogoutButton from "./LogOutButton";

import "./styles/NavBar.css";

function Navbar() {
  return (
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <AuthNavbar /> : <NonAuthNavbar />)}
    </AuthUserContext.Consumer>
  );
}

const AuthNavbar = () => (
  <div className="NavBar">
    <Link to={ROUTES.HOME} className="NavBar__ref">
      Home
    </Link>
    <Link to={ROUTES.FAVORITES} className="NavBar__ref">
      Favorites
    </Link>
    <LogoutButton />
  </div>
);

const NonAuthNavbar = () => (
  <div className="NavBar">
    <Link to={ROUTES.HOME} className="NavBar__ref">
      Home
    </Link>
    <Link to={ROUTES.FAVORITES} className="NavBar__ref">
      Favorites
    </Link>
    <Link to={ROUTES.LOGIN} className="NavBar__ref font-weight-bold">
      Log In
    </Link>
  </div>
);

export default Navbar;
