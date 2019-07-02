import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/CharacterCard/:characterId"
          component={CharacterDetailsPage}
        />
        <Route exact path="/favorites" component={FavoriteCharactersPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
