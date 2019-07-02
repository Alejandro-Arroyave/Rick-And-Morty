import React, { useState } from "react";
import "./styles/HomePage.css";

import NavBar from "../components/NavBar";
import CharactersList from "../components/CharactersList";
import MiniLoader from "../components/MiniLoader";
import Loader from "../components/Loader";
import { useCallApi } from "../Functions/Hooks/UseCallApi";

var data2 = [];

function HomePage() {
  var data = { info: {}, results: [] };
  const [nextPage, setNextPage] = useState(1);

  const respnse = useCallApi(
    `https://rickandmortyapi.com/api/character/?page=${nextPage}`,
    data2
  );
  const loading = respnse.loading;
  data = {
    info: respnse.data.info,
    results: [].concat(data.results, respnse.data.results)
  };
  const error = respnse.error;
  data2 = data.results;

  if (loading && nextPage === 1) {
    return (
      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  console.log(data);
  return (
    <React.Fragment>
      <NavBar />
      <div className="homePage__Hero" />
      <div className="homePage__Title">
        <h1>
          Rick And Morty:
          <br />
          Select your favorite characters
        </h1>
      </div>
      {!loading && (
        <div className="d-flex justify-content-between homePage__Buttons">
          <button
            style={{ visibility: data.info.prev ? "visible" : "hidden" }}
            className="btn btn-normal"
            onClick={() => setNextPage(nextPage - 1)}
          >
            &#60; Previous
          </button>
          <button
            style={{ visibility: data.info.next ? "visible" : "hidden" }}
            className="btn btn-normal"
            onClick={() => setNextPage(nextPage + 1)}
          >
            Next &#62;
          </button>
        </div>
      )}
      <div className="homePage__List">
        <CharactersList data={data.results} />
      </div>
      {loading && (
        <div className="d-flex justify-content-center">
          <MiniLoader />
        </div>
      )}
    </React.Fragment>
  );
}

export default HomePage;
