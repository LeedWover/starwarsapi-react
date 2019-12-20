import React from "react";
import { Link } from "react-router-dom";
import Icon from '../icons/starwars2.png';

function Navigation() {
  return (
    <nav>
      <div className="nav-wrapper grey darken-4">
        <a href="#" className="brand-logo">
          <img src={Icon} style={{height: '2em'}} />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down" style={{fontSize: '3em'}}>
          <li>
            <Link to="/" style={{fontSize: '0.5em'}}>Home</Link>
          </li>
          <li>
            <Link to="/characters" style={{fontSize: '0.5em'}}>Characters</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
