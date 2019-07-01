import React from "react";

import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul className="row CharactersList">
      {props.data.map(character => (
        <li className="col-6 col-md-4" key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
