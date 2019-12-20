import React from 'react';

import {
  Link
} from "react-router-dom";

function Character({name, url}) {
  return (
    <div>
      <Link to={url}>{name}</Link>
    </div>
  )
}

export default Character;
