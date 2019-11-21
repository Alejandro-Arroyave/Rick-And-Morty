import React, { useState } from "react";
import Emoji from "./Emoji";
import { withFirebase } from "../Firebase";

import "./styles/CommentBox.css";

function CommentBox(props) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    props.firebase.setNewComment(props.characterId, value);
  };
  const handleChange = event => {
    setValue(event.target.value);
  };

  if (props.comment) {
    return (
      <div className="comment">
        <p>{props.comment.text}</p>
      </div>
    );
  } else {
    return (
      <div className="comment">
        <h2>Write your comment: </h2>
        <div className="d-flex justify-content-center">
          <textarea
            onChange={handleChange}
            value={value}
            className="comment_Textarea"
            placeholder="Comment here... human"
            name="comment"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success mt-2" onClick={handleClick}>
            <Emoji symbol="🗨" />
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default withFirebase(CommentBox);
