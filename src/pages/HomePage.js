import React from "react";
import "./styles/HomePage.css";

import NavBar from "../components/NavBar";
import CharactersList from "../components/CharactersList";
import MiniLoader from "../components/MiniLoader";
import Loader from "../components/Loader";

class HomePage extends React.Component {
  state = {
    loading: true,
    error: null,
    data: { info: {}, results: [] },
    nextPage: 1
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading && this.state.nextPage == 1) {
      return (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      );
    }

    if (this.state.error) {
      return <h1>Error: {this.state.error.message}</h1>;
    }

    return (
      <React.Fragment>
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
        {this.state.loading && (
          <div className="d-flex justify-content-center">
            <MiniLoader />
          </div>
        )}
        {!this.state.loading && this.state.data.info.next && (
          <button
            className="btn btn-normal homePage__Button"
            onClick={() => this.fetchCharacters()}
          >
            Show more characters!!
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default HomePage;
