import React from "react";
import styles from "./footer.module.css";

import hcSVG from "./hcSVG";
import twitterSVG from "./twitterSVG";
import githubSVG from "./githubSVG";

const Footer = props => {
  return (
    <footer styleName="main-footer">
      <div styleName="footer-logo">
        <a href="/" title="hadaclay.com">
          {hcSVG}
        </a>
      </div>
      <div styleName="footer-text">
        <p>
          <strong>© 2017 Clayton Hadaway. All rights reserved.</strong>
        </p>
        <p>
          Made with <a href="https://www.gatsbyjs.org/">Gatsby</a> and hosted on{" "}
          <a href="https://pages.github.com/">GitHub Pages</a>.
        </p>
      </div>
      <div styleName="footer-links">
        <a href="https://twitter.com/hadaclay">{twitterSVG}</a>
        <a href="https://github.com/hadaclay">{githubSVG}</a>
      </div>
    </footer>
  );
};

export default Footer;
