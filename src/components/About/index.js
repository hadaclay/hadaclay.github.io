import React from "react";
import Link from "gatsby-link";
import styles from "./about.module.css";

const About = props => {
  return (
    <div styleName="main-content">
      <h2>Hi! I'm Clayton. I write code that works sometimes.</h2>
      <img src="/static/img/me.png" />
      <p>
        I'm a freelance full-stack web developer from Dallas, Texas. Currently
        I'm building applications using Node.js and React. I like writing
        reusable, testable, and efficient code. I'm proficient with HTML5 and
        SASS/CSS, and crafting performant, accessible applications is important
        to me.
      </p>
      <p>
        Generally, I thrive in a front-end environment. That's where I got my
        start in web development. If you're looking for a front-end developer
        that cares about every facet of your project—from UX, to design, to code
        maintainability—you've come to the right place. Drop me a line on{" "}
        <a href="https://twitter.com/hadaclay">Twitter</a>, or send me an{" "}
        <a href="mailto:me@hadaclay.com">email</a>. I'll get back to you ASAP.
      </p>
      <p>
        If you'd like to see my work, head on over to my{" "}
        <Link to="/portfolio">portfolio page</Link>, or have a look at my{" "}
        <a href="https://codepen.io/hadaclay">CodePen</a>. I look forward to
        hearing from you!
      </p>
      <h3>Skills:</h3>
      <div styleName="skill-grid">
        <div styleName="left">
          <h4>Core</h4>
          <ul>
            <li>JavaScript / ES2015+</li>
            <li>CSS</li>
            <li>HTML5</li>
            <li>Node.js</li>
            <li>Responsive Design</li>
            <li>Git</li>
          </ul>
        </div>
        <div styleName="middle">
          <h4>Libraries</h4>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Webpack</li>
            <li>MongoDB</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Pug</li>
          </ul>
        </div>
        <div styleName="right">
          <h4>JavaScript</h4>
          <ul>
            <li>Passport.js</li>
            <li>Auth0</li>
            <li>Wikipedia</li>
            <li>Google Books</li>
            <li>Tone.js</li>
            <li>Yelp API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
