import React, { useEffect, useRef } from 'react';
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';

import { GET_ME } from "../utils/queries";

const GGName = require('../assets/GGname.png');
const fireGif = require('../assets/fire.gif');

const HomePage = () => {
  const titleRef = useRef(null);
  const fireRef = useRef(null);

  useEffect(() => {
    const titleAnimation = anime({
      targets: titleRef.current,
      translateY: ['-2%', '2%'],
      loop: true,
      duration: 1500,
      easing: 'easeInOutSine',
      direction: 'alternate',
    });

    const fireAnimation = anime({
      targets: fireRef.current,
      opacity: [0, 1],
      loop: true,
      duration: 1500,
      easing: 'linear',
    });

    return () => {
      titleAnimation.pause();
      fireAnimation.pause();
    };
  }, []);

  const { loading, data } = useQuery(GET_ME);
  const loggedIn = data?.me ? true : false;
  const user = data?.me?.username;

  const renderButton = () => {
    if (loading) {
      return <div>loading...</div>;
    }

    return loggedIn ? (
      <>
        <p className="title is-4" style={{position: 'relative', zIndex: 1}}>Welcome, {user}!</p>
        <Link to="/battle" className="button is-warning is-large" style={{zIndex: 2}}>
          Battle
        </Link>
      </>
    ) : (
      <Link to="/login" className="button is-warning is-large" style={{zIndex: 1}}>
        Login/Signup
      </Link>
    );
  };

  return (
    <section className="hero is-danger is-fullheight" style={{zIndex: -1}}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1
            className="title is-1"
            ref={titleRef}
            style={{
              color: 'rgb(208, 163, 24)',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              position: 'relative', // Added positioning
              zIndex: 1, // Added z-index

            }}
          >
            <img src={GGName} alt="Gourmet Gauntlet" />
          </h1>
          {renderButton()}
        </div>
      </div>
      <div
        className="fire-animation"
        ref={fireRef}
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          width: '225px', // Adjust the width to your desired size
          height: 'auto', // Maintain the aspect ratio
        }}
      >
        <img src={fireGif} alt="Fire" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
};

export default HomePage;
