import React from "react";

import { withAuthentication } from "./Firebase/Session";
import * as ROUTES from "./constants/Routes";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route
            exact
            path="/CharacterCard/:characterId"
            component={CharacterDetailsPage}
          />
          <Route
            exact
            path={ROUTES.FAVORITES}
            component={FavoriteCharactersPage}
          />
          <Route exact path={ROUTES.LOGIN} component={LoginPage} />
          <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default withAuthentication(App);
