import React, { useEffect, useState } from "react";

import Spinner from "./utils/Spinner";
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
          className="waves-effect orange darken-3 waves-light btn-small left"
          onClick={() => setUrl(allCharacters.previous)}
        >
          Previous
        </button>
      ) : null}
      {allCharacters.next ? (
        <button
          className="waves-effect orange darken-3 waves-light btn-small right"
          onClick={() => setUrl(allCharacters.next)}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Characters;
