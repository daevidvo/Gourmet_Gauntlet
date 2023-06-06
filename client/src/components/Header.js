import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <a
            className="navbar-item"
            href="https://github.com/daevidvo/Gourmet_Gauntlet"
          >
            Documentation
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {Auth.loggedIn() ? (
                <Link to="/profile" className="button is-primary">
                  <strong>Profile</strong>
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="button is-primary">
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
