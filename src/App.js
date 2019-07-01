import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
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
        <Route exact path="/favorites" component={FavoriteCharactersPage}/>
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
