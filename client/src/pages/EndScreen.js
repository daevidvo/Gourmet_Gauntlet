import React from "react";
import "chart.js/auto";
import BarChart from "../components/barChart";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

function EndScreen() {
  const { loading, data } = useQuery(GET_ME);

  if (loading) {
    return <div>Loading...</div>
  }

  if(!data) {
    return <div>Please Log In</div>
  }

  return (
    <div className={`hero is-fullheight ${true ? "is-dark" : "has-background-warning-light"}`}>
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
