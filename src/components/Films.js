import React, { useEffect, useState } from "react";

import Spinner from "../Spinner";
import Film from "./Film";
import { getData } from "../api";

function Films() {
  const [url, setUrl] = useState("https://swapi.co/api/films/");
  const [allFilms, setFilms] = useState([]);

  useEffect(() => {
    getData(url).then(data => {
      setFilms(data);
    });
  }, [url]);

  return (
    <div>
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
        >
          Previous
        </button>
      ) : null}
      {allFilms.next ? (
        <button
          className="waves-effect waves-light btn-small right"
          onClick={() => setUrl(allFilms.next)}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Films;
