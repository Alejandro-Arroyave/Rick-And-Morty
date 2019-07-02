import React, { useState } from "react";
import "./styles/AuthPages.css";

import NavBar from "../components/NavBar";
import ErrorModal from "../components/ErrorModal";
import { useForm } from "../Functions/Hooks/UseForm";
import { Signin } from "../Functions/FirebaseAuth";

function SigninPage() {
  const { values, handleChange, handleSubmit } = useForm(signin);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState({ code: "", message: "" });

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function signin() {
    try {
      Signin(values.email, values.password, values.password2);
    } catch (e) {
      console.log("entro al catch")
      setError(e);
      setIsModalOpen(true);
    }
  }

  return (
    <React.Fragment>
      <NavBar />
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
            <button className="btn btn-normal">Sign In!</button>
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

export default SigninPage;
