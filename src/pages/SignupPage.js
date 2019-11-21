import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles/AuthPages.css";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../constants/Routes";

import ErrorModal from "../components/ErrorModal";
import { useForm } from "../Functions/Hooks/UseForm";

function SignupPage(props) {
  const { values, handleChange, handleSubmit } = useForm(signup);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState({ code: "", message: "" });

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function signup() {
    const { email, password } = values;
    props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => props.history.push(ROUTES.HOME))
      .catch(error => {
        setError(error);
        setIsModalOpen(true);
      });
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center p-1">
        <h1>Let's create a account for you</h1>
      </div>
      <div className="d-flex justify-content-center">
        <form align="center" className="w-100" onSubmit={handleSubmit}>
          <h2>Email:</h2>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="email@example.com"
            className="form__Input"
            required
          />
          <br />
          <h2>Password:</h2>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            className="form__Input"
            required
          />
          <br />
          <h2>Repeat Password:</h2>
          <input
            value={values.password2}
            onChange={handleChange}
            type="password"
            name="password2"
            placeholder="Password"
            className="form__Input"
            required
          />
          <div className="d-flex justify-content-center">
            <button className="btn btn-normal">Sign Up!</button>
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
    </React.Fragment>
  );
}

export default withRouter(withFirebase(SignupPage));
