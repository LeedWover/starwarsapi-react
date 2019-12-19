import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Spinner from './Spinner';
import './App.css';

import { getAllCharacters } from './api';

function App() {
  const [url, setUrl] = useState('https://swapi.co/api/people/');
  const [allCharacters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters(url)
    .then(data => {
      setCharacters(data)
    })
  }, [url]);

  return (
    <div className="App">
      {allCharacters.results ? allCharacters.results.map(character => <div key={character.name}>{character.name}</div> ) : <Spinner />}
      {allCharacters.previous ? <button onClick={() =>  setUrl(allCharacters.previous)}>Previous</button> : null}
      {allCharacters.next ? <button onClick={() =>  setUrl(allCharacters.next)}>Next</button> : null}
    </div>
  );
}

export default App;
