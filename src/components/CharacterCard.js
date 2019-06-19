import React from "react";
import { Link } from "react-router-dom";

import './styles/CharacterCard.css';

import michael from "../images/michael.jpeg"

function CharacterCard(props) {
    return(
        <Link to="#" className="characterCard">
            <img src={michael} alt =""/>
            <div className="characterCard__Text">
                <h4>Michael</h4>
                <p>Human</p>
            </div>
        </Link>
    );
}

export default CharacterCard;
