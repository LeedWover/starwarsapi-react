import React, { useEffect, useState } from "react";

import { getData } from "../api";

function PlanetInfo({ location }) {
  const url = location.search.split("=")[1];
  const [planetInformations, setPlanetInformations] = useState({});

  useEffect(() => {
    getData(url).then(data => {
      setPlanetInformations(data);
    });
  }, [url]);

  return (
    <div>
      <h3>{planetInformations.name}</h3>
      <div>
        This planet rotation period is {planetInformations.rotation_period}{" "}
        hours.
      </div>
      <div>
        The gravity is {planetInformations.gravity}, and the diameter is{" "}
        {planetInformations.diameter} km.
      </div>
      <div>
        The climate is {planetInformations.climate}, the terrain contains{" "}
        {planetInformations.terrain}.
      </div>
    </div>
  );
}

export default PlanetInfo;
