import React, { useEffect, useState } from "react";

import Spinner from "./utils/Spinner";
import SearchBar from "./utils/Search";
import Character from "./Character";
import { getData } from "../api";

function Characters() {
  const [url, setUrl] = useState("https://swapi.co/api/people/");
  const [allCharacters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters([]);
    getData(url).then(data => setCharacters(data));
  }, [url]);

  return (
    <div className="row">
      <h2 className="Custom-font" style={{ color: "#E6AB03" }}>
        Characters
      </h2>
      <SearchBar item="characters" />
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
