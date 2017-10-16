import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Clayton Hadaway - Web Developer"
      meta={[
        { name: "language", content: "en" },
        { name: "description", content: "hadaclay - JavaScript Developer" },
        {
          name: "keywords",
          content: "web developer, HTML5, JavaScript, react, CSS, hadaclay"
        }
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Mukta:300,500,800"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/img/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/img/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/img/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/static/img/favicon.ico" />
      <meta
        name="msapplication-config"
        content="/static/img/browserconfig.xml"
      />
      <meta name="theme-color" content="#f7f7f7" />
    </Helmet>
    <div className="container">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
