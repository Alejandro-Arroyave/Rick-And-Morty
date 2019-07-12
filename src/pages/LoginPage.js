import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../constants/Routes";

import NavBar from "../components/NavBar";
import ErrorModal from "../components/ErrorModal";
import { useForm } from "../Functions/Hooks/UseForm";

import RickAndMortyLogo from "../images/RickAndMortyLogo.png";

function LoginPage(props) {
  const { values, handleChange, handleSubmit } = useForm(login);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState({ code: "", message: "" });

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function login() {
    props.firebase
      .doSignInWithEmailAndPassword(values.email, values.password)
      .then(() => props.history.push(ROUTES.HOME))
      .catch(error => {
        setError(error);
        setIsModalOpen(true);
      });
  }
  return (
    <React.Fragment>
      <NavBar />
      <div className="d-flex justify-content-center p-1">
        <img src={RickAndMortyLogo} alt="" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <h1>Let's log in</h1>
        <form align="center" onSubmit={handleSubmit}>
          <h1>Put your email here:</h1>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="email@example.com"
            className="form__Input"
          />
          <br />
          <h1>You should have a password, write it:</h1>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            className="form__Input"
          />
          <div className="d-flex justify-content-center">
            <button className="btn btn-normal">Let me in!</button>
          </div>
        </form>
        <ErrorModal
          error={error}
          isOpen={isModalOpen}
          onClose={() => {
            handleCloseModal();
          }}
        />
      </div>
      <Link to={ROUTES.SIGNUP} className="signIn d-flex justify-content-center">
        Sign up
      </Link>
    </React.Fragment>
  );
}

export default withRouter(withFirebase(LoginPage));
