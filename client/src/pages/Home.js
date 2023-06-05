import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ME } from '../utils/queries';

const HomePage = () => {
    const { loading, data } = useQuery(GET_ME);
    const loggedIn = data?.me ? true : false;
    const user = data?.me?.username;

const renderButton = () => {
  return loggedIn ? (
    <>
        <p className="title is-4">Welcome, {user}!</p>
    <Link to="/battle" className="button is-primary is-large">
      Battle
    </Link>
    </>
  ) : (
    <Link to="/login" className="button is-primary is-large">
      Login/Signup
    </Link>
  );
};

return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Gourmet Gauntlet</h1>
          {renderButton()}
        </div>
      </div>
    </section>
  );
};

export default HomePage;