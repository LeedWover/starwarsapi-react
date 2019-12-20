import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Nav from './components/Navigation';
import Characters from "./components/Characters";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App container">
      <Switch>
      <Route exact path="/characters" component={Characters} />
        <Route path="/" render={() => <div>Home</div>} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
