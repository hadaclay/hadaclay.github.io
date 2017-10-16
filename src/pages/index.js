import React from "react";
import Link from "gatsby-link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

import styles from "./styles/home.module.css";

const IndexPage = props => {
  return (
    <div styleName={("homepage", "grid")}>
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default IndexPage;
