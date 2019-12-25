import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getData } from "../api";

function CharacterInfo({ location }) {
  const url = location.search.split("=")[1];
  const [characterInformations, setCharacterInfo] = useState({});
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
    <div>
      <h3>{characterInformations.name}</h3>
      <div>- Height: {characterInformations.height} cm.</div>
      <div>- Mass: {characterInformations.mass} kg.</div>
      <div>- Gender: {characterInformations.gender}</div>
      <div>- Hair color: {characterInformations.hair_color}</div>
      <div>- Eye color: {characterInformations.eye_color}</div>
      <div>- Skin color: {characterInformations.skin_color}</div>
      <ul>
        <li>Films:</li>
        {films.map(film => (
          <li key={film.title}>
            <Link to={`/film-info/?url=${film.url}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterInfo;
