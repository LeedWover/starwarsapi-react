import React, { useEffect, useState } from "react";

import Spinner from "../Spinner";
import Planet from "./Planet";
import { getData } from "../api";

function Planets() {
  const [url, setUrl] = useState("https://swapi.co/api/planets/");
  const [allPlanets, setPlanets] = useState([]);

  useEffect(() => {
    getData(url).then(data => {
      setPlanets(data);
    });
  }, [url]);

  return (
    <div className="row">
      {allPlanets.results ? (
        <ul>
          {allPlanets.results.map(planet => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      {allPlanets.previous ? (
        <button
          className="waves-effect orange darken-3 waves-light btn-small left"
          onClick={() => setUrl(allPlanets.previous)}
        >
          Previous
        </button>
      ) : null}
      {allPlanets.next ? (
        <button
          className="waves-effect orange darken-3 waves-light btn-small right"
          onClick={() => setUrl(allPlanets.next)}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Planets;
