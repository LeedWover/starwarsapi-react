import React, { useEffect, useState } from "react";

import Spinner from './utils/Spinner';
import { getData } from "../api";

function PlanetInfo({ location }) {
  const url = location.search.split("=")[1];
  const [planetInformations, setPlanetInformations] = useState(null);

  useEffect(() => {
    getData(url).then(data => setPlanetInformations(data));
  }, [url]);

  return (
    <div>
      {planetInformations ? (
        <>
          <h2 className="custom-font title-color">{planetInformations.name}</h2>
          <div>
            This planet's rotation period is{" "}
            {planetInformations.rotation_period} hours.
          </div>
          <div>
            The gravity is {planetInformations.gravity}, and the planet's
            diameter is {planetInformations.diameter} km.
          </div>
          <div>
            The climate is {planetInformations.climate}, the terrain contains{" "}
            {planetInformations.terrain}.
          </div>
        </>
      ) : <Spinner/>}
    </div>
  );
}

export default PlanetInfo;
