import React from "react";
import NavBar from "../components/NavBar";
import CharacterCard from "../components/CharacterCard";

import "./styles/HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="homePage__Hero" />
        <div className="homePage__Title">
          <h1>
            Rick And Morty:
            <br />
            Select your favorite characters
          </h1>
        </div>
        <div className="prueba">
          <CharacterCard />
        </div>
      </div>
    );
  }
}

export default HomePage;
