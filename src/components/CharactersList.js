import React from "react";

import "./styles/CharactersList.css";

import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul className="row CharactersList">
      {props.data.results.map(character => (
        <li className="col-6 col-md-4" key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
