import React from "react";
import { Switch, Route, BrowserRouter as Router  } from "react-router-dom";
import "./App.css";

import Nav from './components/Navigation';
import Characters from "./components/Characters";
import CharacterInfo from "./components/CharacterInfo";
import Planets from "./components/Planets";
import PlanetInfo from "./components/PlanetInfo";
import Films from "./components/Films";
import FilmInfo from "./components/FilmInfo";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App container">
        <Switch>
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/character-info" component={CharacterInfo} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/planet-info" component={PlanetInfo} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/film-info" component={FilmInfo} />
        <Route path="/" render={() => <div>Home</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
