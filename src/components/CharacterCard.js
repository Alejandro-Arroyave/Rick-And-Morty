import React from "react";
import { Link } from "react-router-dom";

import "./styles/CharacterCard.css";

function CharacterCard(props) {
  const { character } = props;

  if (character === undefined) {
    return null;
  }

  return (
    <div className="characterCard">
      <Link
        className="text-reset text-decoration-none"
        to={`/CharacterCard/${character.id}`}
      >
        <img src={character.image} className="fig" alt="" />
        <div className="characterCard__Text">
          <h4 className="font-weight-bold">{character.name}</h4>
          <p>
            #{character.species} #{character.location.name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CharacterCard;
