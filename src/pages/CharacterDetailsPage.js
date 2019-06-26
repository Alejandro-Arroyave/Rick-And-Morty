import React from "react";
import { Link } from "react-router-dom";

import "./styles/CharacterDetailsPage.css";

import NavBar from "../components/NavBar";
import Emoji from "../components/Emoji";
import CharacterCardDetails from "../components/CharacterCardDetails";

class CharacterDetailsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${
          this.props.match.params.characterId
        }`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: data
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
    console.log(this.state.data);
    return (
      <React.Fragment>
        <NavBar />
        <div className="CharacterDetails">
          <CharacterCardDetails data={this.state.data} />
        </div>
        <div className="row">
          <div className="col-8 characterCardDetails__Container" />
          <div className="col-4 characterCardDetails__Container">
            <Link to="/" className="btn btn-normal">
              &#60; Back
            </Link>
            <button className="btn btn-special">
              <Emoji symbol="⭐" /> Add to favorites
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CharacterDetailsPage;
