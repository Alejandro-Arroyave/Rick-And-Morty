import React from "react";
import NavBar from "../components/NavBar";
import CharactersList from "../components/CharactersList";

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
      this.setState({ loading: true });
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.setState.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    if (this.state.error) {
      return <h1>Error: {this.state.error.message}</h1>;
    }

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
        <div className="homePage__List">
          <CharactersList data={this.state.data} />
        </div>
        <button
          className="btn btn-normal homePage__Button"
          onClick={this.fetchCharacters()}
        >
          Show more characters!!
        </button>
      </div>
    );
  }
}

export default HomePage;
