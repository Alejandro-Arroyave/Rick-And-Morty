import React from "react";

import Modal from "./Modal.js";

function ErrorModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h2 style={{ color: "tomato" }}>Error: {props.error.code}</h2>
        <p>{props.error.message}</p>
        <div>
          <button className="btn btn-normal" onClick={props.onClose}>
            Ok
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ErrorModal;
