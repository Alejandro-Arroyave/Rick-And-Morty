import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/CharacterDetailsPage.css";

import NavBar from "../components/NavBar";
import Emoji from "../components/Emoji";
import CharacterCardDetails from "../components/CharacterCardDetails";



function CharacterDetailsPage(props) {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCharacter() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${
          props.match.params.characterId
        }`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
    
  useEffect(() => {
    fetchCharacter();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error != null) {
    return <h1>Errorer: {error.message}</h1>;
  }
  console.log(data);
  console.log("aas");
  return (
    <React.Fragment>
      <NavBar />
      <div className="CharacterDetails">
        <CharacterCardDetails data={data} />
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

export default CharacterDetailsPage;
