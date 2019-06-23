import React from "react";

import "./styles/CharacterDetailsPage.css";

import NavBar from "../components/NavBar";
import CharacterCardDetails from "../components/CharacterCardDetails";

class CharacterDetailsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      data: { info: {}, results: [] },
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1"
      );
      //     `https://rickandmortyapi.com/api/character/${
      //       this.props.match.params.characterId
      //     }`
      //   );
      const data = await response.json();
      this.setState({
        loading: false,
        data: { info: data.info, results: data.results }
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    if (this.state.error != null) {
      return <h1>Error: {this.state.error.message}</h1>;
    }
    console.log(this.state.data.results);
    return (
      <div>
        <NavBar />
        <div className="CharacterDetails">
          <CharacterCardDetails data={this.state.data.results} />
        </div>
      </div>
    );
  }
}

export default CharacterDetailsPage;
