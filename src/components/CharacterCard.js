import React from "react";
import { Link } from "react-router-dom";

import "./styles/CharacterCard.css";

import michael from "../images/michael.jpeg";

function CharacterCard(props) {
  const { character } = props;
  return (
    <Link
      to="#"
      className="characterCard"
      // style={{ backgroundImage: `url(${character.image})` }}
    >
      <figure className="fig">
        <img src={character.image} alt="" />
      </figure>
      <div className="characterCard__Text">
        <h4>{character.name}</h4>
        <p>{character.species}</p>
      </div>
    </Link>
  );
}

export default CharacterCard;
