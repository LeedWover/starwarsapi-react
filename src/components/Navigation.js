import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/starwars3.png";

function Navigation() {
  return (
    <>
      <nav>
        <div className="nav-wrapper grey darken-4">
          <Link
            to="/"
            className="brand-logo"
            style={{ padding: "0.15em 0 0 0.7em" }}
          >
            <img src={Icon} style={{ height: "1em" }} />
          </Link>

          <a href="#" data-target="mobile" className="sidenav-trigger">
            <i style={{ fontSize: "2.4em", color: "#E6AB03" }} className="fas fa-bars"></i>
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down Custom-font"
          >
            <li>
              <Link to="/" style={{ fontSize: "2.4em", color: "#E6AB03" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/characters"
                style={{ fontSize: "2.4em", color: "#E6AB03" }}
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                to="/planets"
                style={{ fontSize: "2.4em", color: "#E6AB03" }}
              >
                Planets
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
