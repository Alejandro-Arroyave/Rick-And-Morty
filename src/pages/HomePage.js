import React from "react";
import NavBar from "../components/NavBar";
import CharacterCard from "../components/CharacterCard";

import "./styles/HomePage.css";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: { info: {}, results: [] },
      error: null,
      nextPage: 1
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

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
          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-md-4 mb-5 listItems" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

export default HomePage;
