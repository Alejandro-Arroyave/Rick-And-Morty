import React from "react";

import { withFirebase } from "../Firebase";

function LogoutButton(props) {
  return <button className="btn btn-normal" onClick={props.firebase.doSignOut}>Log out</button>;
}

export default withFirebase(LogoutButton);