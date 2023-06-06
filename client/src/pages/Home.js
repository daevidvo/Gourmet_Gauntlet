import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_ME } from "../utils/queries";

const GGName = require('../assets/GGname.png');

const HomePage = () => {
  const { loading, data } = useQuery(GET_ME);
  const loggedIn = data?.me ? true : false;
  const user = data?.me?.username;

  const renderButton = () => {
    if (loading) {
      return <div>loading...</div>;
    }

    return loggedIn ? (
      <>
        <p className="title is-4">Welcome, {user}!</p>
        <Link to="/battle" className="button is-warning is-large">
          Battle
        </Link>
      </>
    ) : (
      <Link to="/login" className="button is-warning is-large">
        Login/Signup
      </Link>
    );
  };

  return (
    <section className="hero is-danger is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
          <img
                src={GGName}
                // width="100"
                // height="100"
            />
          </h1>
          {renderButton()}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
