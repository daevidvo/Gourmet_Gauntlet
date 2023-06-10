import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";

import Auth from "../utils/auth";

const G = require("../assets/G.png");

function Header() {
  const [isActive, setIsActive] = useState(false);
  const width = useWindowWidth();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src={G} width="100" height="100" alt="Gourmet Gauntlet mini logo" />
        </Link>

        <button
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <a
            className="navbar-item"
            href="https://github.com/daevidvo/Gourmet_Gauntlet"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
          {Auth.loggedIn() && (
            <>
              <Link to="/profile" className="navbar-item">
                Profile
              </Link>
              <a className="navbar-item" onClick={logout}>
                Logout
              </a>
            </>
          )}
        </div>

        <div className="navbar-end">
          {!Auth.loggedIn() && (
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/signup" className="button is-danger">
                  <strong>Sign Up</strong>
                </Link>
                <Link to="/login" className="button is-light">
                  Log In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
