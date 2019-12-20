import React, { useEffect, useState } from "react";

import Spinner from "../Spinner";
import Character from "./Character";
import { getAllCharacters } from "../api";

function Characters() {
  const [url, setUrl] = useState("https://swapi.co/api/people/");
  const [allCharacters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters(url).then(data => {
      setCharacters(data);
    });
  }, [url]);

  return (
    <div>
      {allCharacters.results ? (
        <ul>
          {allCharacters.results.map(character => (
            <Character char={character} url={character.url} />
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      {allCharacters.previous ? (
        <button
          className="waves-effect waves-light btn-small left"
          onClick={() => setUrl(allCharacters.previous)}
        >
          Previous
        </button>
      ) : null}
      {allCharacters.next ? (
        <button
          className="waves-effect waves-light btn-small right"
          onClick={() => setUrl(allCharacters.next)}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Characters;
