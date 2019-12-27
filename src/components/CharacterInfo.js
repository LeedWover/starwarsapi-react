import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Spinner from "./utils/Spinner";
import { getData } from "../api";

function CharacterInfo({ location }) {
  const url = location.search.split("=")[1];
  const [characterInformations, setCharacterInfo] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getData(url).then(data => {
      setCharacterInfo(data);
      data.films.map(url => {
        getData(url).then(filmData => {
          setFilms(prevState => [
            ...prevState,
            { title: filmData.title, url: filmData.url }
          ]);
        });
      });
    });
  }, [url]);

  return (
    <div className="row" style={{ fontSize: "1.5em" }}>
      {characterInformations ? (
        <>
          <h2 className="custom-font title-color">
            {characterInformations.name}
          </h2>
          <div className="col s4 offset-s2">
          <h2 className="custom-font title-color">Specs:</h2>
            <div>- Height: {characterInformations.height} cm.</div>
            <div>- Mass: {characterInformations.mass} kg.</div>
            <div>- Gender: {characterInformations.gender}</div>
            <div>- Hair color: {characterInformations.hair_color}</div>
            <div>- Eye color: {characterInformations.eye_color}</div>
            <div>- Skin color: {characterInformations.skin_color}</div>
          </div>
          <div className="col s4">
            <ul>
              <li><h2 className="custom-font title-color">Films:</h2></li>
              {films.map(film => (
                <li key={film.title}>
                  <Link to={`/film-info/?url=${film.url}`}>{film.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default CharacterInfo;
