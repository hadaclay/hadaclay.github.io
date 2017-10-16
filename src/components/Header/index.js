import React, { PureComponent } from "react";
import Link from "gatsby-link";
import styles from "./header.module.css";

const logoSVG = (
  <svg styleName="hc-logo" width="100" height="100" viewBox="0 0 21.167 21.167">
    <g transform="translate(0 -275.83)" fill="#1e1e1e">
      <g
        className="hc-text"
        transform="matrix(.26458 0 0 .26458 0 279.61)"
        strokeWidth="1px"
        aria-label="hc"
      >
        <path
          d="m55.757 7.6079q7.296 0 12.416 4.544l-5.248 7.36q-2.944-2.368-6.016-2.368-2.944 0-4.352 2.048t-1.408 7.04q0 4.8 1.408 6.592 1.472 1.728 4.224 1.728 1.472 0 2.752-0.448 1.28-0.512 3.2-1.728l5.44 7.744q-5.184 4.224-12.096 4.224-5.568 0-9.664-2.24-4.096-2.304-6.272-6.4-2.176-4.16-2.176-9.472 0-5.376 2.176-9.6 2.24-4.224 6.272-6.592 4.032-2.432 9.344-2.432zm-30.481 0q4.288 0 6.72 2.688 2.496 2.688 2.496 7.552v25.216h-12.672v-22.912q0-1.92-0.512-2.624-0.448-0.704-1.408-0.704-2.112 0-4.288 3.392v22.848h-12.672v-47.616l12.672-1.28v17.792q2.176-2.304 4.48-3.328t5.184-1.024z"
          fill="#1e1e1e"
        />
      </g>
      <rect x="0.75" y="292.96" width="16.905" height="1.8041" fill="#1e1e1e" />
    </g>
  </svg>
);

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <header styleName="header">
        <h1 className="logo">
          <Link to="/" title="hadaclay.com">
            {logoSVG}
          </Link>
        </h1>
        <button
          styleName={
            this.state.open ? "menu-trigger button-active" : "menu-trigger"
          }
          aria-controls="main-nav"
          aria-expanded={this.state.open}
          onClick={this.toggleMenu}
        >
          Menu
        </button>
        <nav styleName="main-nav">
          <ul
            styleName={
              this.state.open ? "main-nav__list open" : "main-nav__list"
            }
          >
            <li styleName="main-nav__item">
              <Link to="/portfolio">My Work</Link>
            </li>
            <li styleName="main-nav__item">
              <a href="mailto:me@hadaclay.com">Hire Me</a>
            </li>
            <li styleName="main-nav__item">
              <a href="/static/resume.pdf">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
