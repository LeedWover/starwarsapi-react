import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

import Spinner from "./utils/Spinner";
import SearchBar from "./utils/Search";
import Character from "./Character";
import { getData } from "../api";

function Characters() {
  const defUrl = "https://swapi.co/api/people/";
  const [isSearch, setSearch] = useState(false);
  const [url, setUrl] = useState(defUrl);
  const [allCharacters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters([]);
    getData(url).then(data => setCharacters(data));
  }, [url]);

  return (
    <div className="row">
      {isSearch ? (
        <Fade duration={2500}>
          <i
            onClick={() => setSearch(!isSearch)}
            className="fas fa-caret-up title-color"
            style={{ fontSize: "8em" }}
          ></i>
          <SearchBar type="characters" set={setUrl} def={defUrl} />
        </Fade>
      ) : (
        <Fade>
          <h2
            onClick={() => setSearch(!isSearch)}
            className="custom-font title-color"
          >
            Characters <i className="fas fa-search"></i>
            <small> Search...</small>
          </h2>
        </Fade>
      )}
      {allCharacters.results ? (
        <ul>
          {allCharacters.results.map(character => (
            <Character key={character.name} char={character} />
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      {allCharacters.previous ? (
        <button
          className="waves-effect waves-light btn-small left"
          onClick={() => setUrl(allCharacters.previous)}
          style={{ background: "#E6AB03" }}
        >
          Previous
        </button>
      ) : null}
      {allCharacters.next ? (
        <button
          className="waves-effect waves-light btn-small right"
          onClick={() => setUrl(allCharacters.next)}
          style={{ background: "#E6AB03" }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Characters;
