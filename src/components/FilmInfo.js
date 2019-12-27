import React, { useEffect, useState } from "react";

import Spinner from "./utils/Spinner";
import Crawl from './utils/Crawl';
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
          <h2 className="custom-font title-color">{filmInformations.title}</h2>
          <div>- Director: {filmInformations.director}</div>
          <div>- Producers: {filmInformations.producer}</div>
          <div>- Release date: {filmInformations.release_date}</div>
          <Crawl title={filmInformations.title} crawl={filmInformations.opening_crawl} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default FilmInfo;
