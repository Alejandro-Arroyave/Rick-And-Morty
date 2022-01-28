import React from "react";

function LogoutButton(props) {
  return (
    <button
      className="btn btn-normal"
      onClick={() => console.log("Sesion cerrada")}
    >
      Log out
    </button>
  );
}

export default LogoutButton;
