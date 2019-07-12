import React from "react";

import {withAuthorization} from "../Firebase/Session"

import NavBar from "../components/NavBar";
import CharactersList from "../components/CharactersList";
import Loader from "../components/Loader";

import { useCallApi } from "../Functions/Hooks/UseCallApi";

import "./styles/HomePage.css";

function getFavoriteCharactersUrl() {
  const CharactersID = [1, 2, 7, 35, 85, 12, 98, 154];
  var cad = "";
  CharactersID.forEach(element => {
    cad = cad + element.toString() + ",";
  });
  return (
    "https://rickandmortyapi.com/api/character/" +
    cad.substring(0, cad.length - 1)
  );
}

function FavoriteCharactersPage(props) {
  const { loading, data, error } = useCallApi(getFavoriteCharactersUrl());

  // useEffect(() => {
  //   const a = props.firebase.readFavoritesData();
  //   console.log(a)
  // })

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="homePage__Hero" />
      <div className="homePage__Title">
        <h1>
          Rick And Morty:
          <br />
          Your favorite characters
        </h1>
      </div>
      <div className="homePage__List">
        <CharactersList data={data} />
      </div>
    </React.Fragment>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FavoriteCharactersPage);
