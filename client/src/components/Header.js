import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const G = require("../assets/G.png");

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src={G} width="100" height="100" alt="Gourmet Gauntlet mini logo"/>
        </Link>

        <button
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
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
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {Auth.loggedIn() ? (
                <>
                  <Link to="/profile" className="button is-danger">
                    <strong>Profile</strong>
                  </Link>
                  <button className="button is-light" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signup" className="button is-danger">
                    <strong>Sign Up</strong>
                  </Link>
                  <Link to="/login" className="button is-light">
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
