import React from "react";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarChart from './barChart';

function EndScreen() {

Chart.register(CategoryScale);


  return (
    <div className="hero is-fullheight has-background-warning-light">
      <div className="hero-body">
        <div className="container">
          <div className="is-centered">
            <p className="title">Thank you for playing</p>
            <p className="subtitle">Small subtitle</p>
            <BarChart width="400" height="400"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndScreen;

