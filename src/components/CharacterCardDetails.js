import React from "react";
import { Link } from "react-router-dom";

import "./styles/CharacterCardDetails.css";

import Emoji from "../components/Emoji";

import michael from "../images/michael.jpeg";

const status = "Alive";
const gender = "Male";

function characterStatus() {
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

function characterGender() {
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
  const { character } = props;

  //   if (character === undefined) {
  //     return null;
  //   }

  return (
    <div>
      <div className="characterCardDetails">
        <img
          src={michael}
          className="characterCardDetails__Image"
          alt="Character image"
        />
        <div className="row characterCardDetails__Row">
          <div className="col characterCardDetails__Info">
            <h4>Name:</h4>
            <p>Michael Norman</p>
            <h4>Specie:</h4>
            <p>Human</p>
            <h4>Origin:</h4>
            <p>Earth (Replacement dimension)</p>
          </div>
          <div className="col characterCardDetails__Info">
            <h4>Status:</h4>
            <p title={status}>
              <Emoji symbol={characterStatus()} />
            </p>
            <br />
            <h4>Gender:</h4>
            <p title={gender}>
              <Emoji symbol={characterGender()} />
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 characterCardDetails__Container" />
        <div className="col-4 characterCardDetails__Container">
          <Link to="/" className="btn btn-normal">
            &#60; Back
          </Link>
          <Link className="btn btn-special">
            <Emoji symbol="⭐" /> Add to favorites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
