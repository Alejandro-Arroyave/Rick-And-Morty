import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

import "./styles/CharacterDetailsPage.css";

import Emoji from "../components/Emoji";
import CharacterCardDetails from "../components/CharacterCardDetails";
import CommentBox from "../components/CommentBox";
import Loader from "../components/Loader";
import { useCallApi } from "../Functions/Hooks/UseCallApi";
import { withFirebase } from "../Firebase";

function useGetDatabase(firebase, characterId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function get() {
      console.log(firebase)
      firebase.getComments(characterId).on('value',function(snapshot) {
        console.log(snapshot.val());
        setLoading(false);
      });
    }
    get();
  }, []);
  return { comments, loading };
}

function CharacterDetailsPage(props) {
  const { loading: loadingApi, data, error } = useCallApi(
    `https://rickandmortyapi.com/api/character/${props.match.params.characterId}`
  );
  const { comments, loading } = useGetDatabase(
    props.firebase,
    props.match.params.characterId
  );

  if (loading || loading) {
    return (
      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    );
  }
  if (error != null) {
    return <h1>Error: {error.message}</h1>;
  }

  const handleClick = () => {
    console.log(props.firebase.auth.currentUser.uid);
    props.firebase.setNewCharacter(props.match.params.characterId);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <CharacterCardDetails data={data} />
      </div>
      <div className="row">
        <div className="col-8 characterCardDetails__Container" />
        <div className="col-4 characterCardDetails__Container">
          <Link to={ROUTES.HOME} className="btn btn-normal">
            &#60; Back
          </Link>
          <button className="btn btn-special" onClick={handleClick}>
            <Emoji symbol="⭐" /> Add to favorites
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <CommentBox characterId={props.match.params.characterId} />
      </div>
    </React.Fragment>
  );
}

export default withFirebase(CharacterDetailsPage);
