import React, { useContext } from "react";
import "chart.js/auto";
import BarChart from "../components/barChart";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { ThemeContext } from "../utils/context/ThemeContext";

function EndScreen() {
  const { loading, data } = useQuery(GET_ME);

  const isDark = useContext(ThemeContext);

  if (loading) {
    return <div>Loading...</div>
  }

  if(!data) {
    return <div>Please Log In</div>
  }

  return (
    <div className={`hero is-fullheight ${isDark ? "is-dark" : "has-background-warning-light"}`}>
      <div className="hero-body">
        <div className="container">
          <div className="is-centered">
            <p className="title">Thank you for playing</p>
            <p className="subtitle">Here are your stats, {data.me.username}</p>
            <BarChart width="400" height="400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndScreen;
