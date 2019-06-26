import React from "react";

import "./styles/CharacterCardDetails.css";

import Emoji from "../components/Emoji";

function characterStatus(status) {
  switch (status) {
    case "Alive":
      return "❤";
    case "Dead":
      return "☠";
    case "Unknown":
      return "🤷‍♀️";
    default:
      return "🤷‍♀️";
  }
}

function characterGender(gender) {
  switch (gender) {
    case "Male":
      return "👨";
    case "Female":
      return "👩";
    case "Genderless":
      return "❓";
    case "Unknown":
      return "🤷‍♀️";
    default:
      return "🤷‍♀️";
  }
}

function CharacterCard(props) {
  const character = props.data;
  const gender = character.gender;
  const status = character.status;
  console.log(character)
  return (
    <React.Fragment>
      <div className="characterCardDetails">
        <img
          src={character.image}
          className="characterCardDetails__Image"
          alt="Character image"
        />
        <div className="row characterCardDetails__Row">
          <div className="col characterCardDetails__Info">
            <h4>Name:</h4>
            <p>{character.name}</p>
            <h4>Specie:</h4>
            <p>{character.species}</p>
            <h4>Origin:</h4>
            <p>{character.origin.name}</p>
          </div>
          <div className="col characterCardDetails__Info">
            <h4>Status:</h4>
            <p title={status}>
              <Emoji symbol={characterStatus(status)} />
            </p>
            <br />
            <h4>Gender:</h4>
            <p title={gender}>
              <Emoji symbol={characterGender(gender)} />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CharacterCard;
