import React, { useEffect, useState } from "react";

import Spinner from "./utils/Spinner";
import Planet from "./Planet";
import { getData } from "../api";

function Planets() {
  const [url, setUrl] = useState("https://swapi.co/api/planets/");
  const [allPlanets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets([]);
    getData(url).then(data => setPlanets(data));
  }, [url]);

  return (
    <div className="row">
      <h2 className="Custom-font" style={{ color: "#E6AB03" }}>
        Planets
      </h2>
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
          className="waves-effect waves-light btn left"
          onClick={() => setUrl(allPlanets.previous)}
          style={{ background: "#E6AB03" }}
        >
          Previous
        </button>
      ) : null}
      {allPlanets.next ? (
        <button
          className="waves-effect waves-light btn right"
          onClick={() => setUrl(allPlanets.next)}
          style={{ background: "#E6AB03" }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Planets;
