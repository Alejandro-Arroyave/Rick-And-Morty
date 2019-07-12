import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

import "./styles/CharacterDetailsPage.css";

import NavBar from "../components/NavBar";
import Emoji from "../components/Emoji";
import CharacterCardDetails from "../components/CharacterCardDetails";
import Loader from "../components/Loader";
import { useCallApi } from "../Functions/Hooks/UseCallApi";

function CharacterDetailsPage(props) {
  const { loading, data, error } = useCallApi(
    `https://rickandmortyapi.com/api/character/${
      props.match.params.characterId
    }`
  );

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    );
  }
  if (error != null) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <React.Fragment>
      <NavBar />
      <div className="CharacterDetails">
        <CharacterCardDetails data={data} />
      </div>
      <div className="row">
        <div className="col-8 characterCardDetails__Container" />
        <div className="col-4 characterCardDetails__Container">
          <Link to={ROUTES.HOME} className="btn btn-normal">
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
