import React, { useEffect, useState } from "react";

import Spinner from "./utils/Spinner";
import { getData } from "../api";

function FilmInfo({ location }) {
  const url = location.search.split("=")[1];
  const [filmInformations, setFilmInformations] = useState(null);

  useEffect(() => {
    getData(url).then(data => {
      setFilmInformations(data);
    });
  }, [url]);

  return (
    <div>
      {filmInformations ? (
        <>
          <h3>{filmInformations.title}</h3>
          <div>- Director: {filmInformations.director}</div>
          <div>- Producers: {filmInformations.producer}</div>
          <div>- Release date: {filmInformations.release_date}</div>
          <div>- Opening crawl: {filmInformations.opening_crawl}</div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default FilmInfo;
