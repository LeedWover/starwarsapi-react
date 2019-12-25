import React, { useEffect, useState } from "react";

import Spinner from "./utils/Spinner";
import Film from "./Film";
import { getData } from "../api";

function Films() {
  const [url, setUrl] = useState("https://swapi.co/api/films/");
  const [allFilms, setFilms] = useState([]);

  useEffect(() => {
    setFilms([]);
    getData(url).then(data => setFilms(data));
  }, [url]);

  return (
    <div className="row">
      <h2 className="Custom-font" style={{ color: "#E6AB03" }}>
        Films
      </h2>
      {allFilms.results ? (
        <ul>
          {allFilms.results.map(film => (
            <Film key={film.title} film={film} />
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      {allFilms.previous ? (
        <button
          className="waves-effect waves-light btn-small left"
          onClick={() => setUrl(allFilms.previous)}
          style={{ background: "#E6AB03" }}
        >
          Previous
        </button>
      ) : null}
      {allFilms.next ? (
        <button
          className="waves-effect waves-light btn-small right"
          onClick={() => setUrl(allFilms.next)}
          style={{ background: "#E6AB03" }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Films;
