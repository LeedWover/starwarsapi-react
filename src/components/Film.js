import React, { useState } from "react";
import { Link } from "react-router-dom";

import Arrow from "./utils/Arrow";

function Film({ film }) {
  const [info, setInfo] = useState(false);

  return (
    <div className="row">
      <div
        className="col s12 m6 offset-m3"
        onClick={() => setInfo(!info)}
        style={{ fontSize: "1.3em", cursor: "pointer" }}
      >
        <div
          className="card"
          style={{ backgroundColor: "rgba(76, 86, 95, 0.55)" }}
        >
          <div className="card-content white-text">
            <span className="card-title">
              <Arrow info={info} />
              {" "}
              { film.title }
              ({ film.release_date.split('-')[0] })
              {" "}
              <Arrow info={info} />
            </span>
          </div>
          {info ? (
            <div className="card-action">
              <Link to={`/film-info?url=${film.url}`}>Film Info</Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Film;