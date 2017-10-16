import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";

import styles from "./styles/portfolio.module.css";

const Portfolio = props => (
  <div styleName="grid">
    <Header isSticky />

    <ul styleName="projects">
      <Project
        description="Mininal HN is an open-source Hacker News client written with React Native. Written to learn Android development."
        projectImg="/static/img/minimalhn.png"
        projectTitle="Minimal HN"
        projectDate="August 2017"
        projectURL="https://play.google.com/store/apps/details?id=com.hadaclay.minimalhn"
        techUsed="react, react native, android, gradle, react-navigation"
        githubURL="https://github.com/hadaclay/MinimalHN"
      />

      <Project
        description="Web synthesizer written for popular Youtuber FrankJavCee. Works best on touchscreens."
        projectImg="/static/img/frankjavsynth.png"
        projectTitle="FrankJavSynth"
        projectDate="July 2017"
        projectURL="https://frankjavsynth.herokuapp.com/"
        techUsed="Express, Tone.js, Web Audio API, jQuery/jQuery UI, Gridstack"
        githubURL="https://github.com/hadaclay/frankjavsynth"
      />

      <Project
        description="Full-stack book club application. Users can add and share books with users in their area."
        projectImg="/static/img/swapbooks.png"
        projectTitle="SwapBooks"
        projectDate="July 2017"
        projectURL="https://swapbooks.herokuapp.com/"
        techUsed="Express, Pug, SASS, Webpack, Bulma, Passport"
        githubURL="https://github.com/hadaclay/swapbooks"
      />

      <Project
        description="Chart the closing prices of stock symbols using the Quandl API for the past year. Results are fetched in real time and updated as users add or remove symbols."
        projectImg="/static/img/stockcharts.png"
        projectTitle="Stock Charts"
        projectDate="June 2017"
        projectURL="https://stockscharts.herokuapp.com/"
        techUsed="Bulma, Express, SASS, Socket.io, Webpack, Chart.js"
        githubURL="https://github.com/hadaclay/stocks-charts"
      />

      <Project
        description="The classic programming exercise implemented in React.js and SASS. Uses a standard HTML table as the board. "
        projectImg="/static/img/gameoflife.png"
        projectTitle="React Game of Life"
        projectDate="February 2017"
        projectURL="https://codepen.io/hadaclay/full/YZKBpY/"
        techUsed="React, SASS"
        githubURL="https://github.com/hadaclay/react-game-of-life"
      />

      <Project
        description="A simple five-function calculator using jQuery and Bootstrap"
        projectImg="/static/img/calculator.png"
        projectTitle="Simple Calculator"
        projectDate="December 2016"
        projectURL="https://codepen.io/hadaclay/full/mApxgP/"
        techUsed="Bootstrap, jQuery"
        githubURL="https://github.com/hadaclay/simple-calculator"
      />
    </ul>

    <Footer />
  </div>
);

export default Portfolio;
