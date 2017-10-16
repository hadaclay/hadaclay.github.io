import React from "react";

import styles from "./project.module.css";

const Project = props => (
  <li styleName="project-item">
    <div styleName="project-description">
      <a styleName="project-header" href={props.projectURL}>
        <h1>{props.projectTitle}</h1>
      </a>
      <div styleName="project-image">
        <img src={props.projectImg} alt={props.projectTitle + " image"} />
      </div>
      <ul>
        <li>
          <strong>Date:</strong> {props.projectDate}
        </li>
        <li>
          <strong>URL:</strong>{" "}
          <a href={props.projectURL}>{props.projectURL}</a>
        </li>
        <li>
          <strong>Technologies Used:</strong> {props.techUsed}
        </li>
        <li>
          <strong>Source:</strong>{" "}
          <a href={props.githubURL}>{props.githubURL}</a>
        </li>
        <li>
          <strong>Description: </strong>
          {props.description}
        </li>
      </ul>
    </div>
  </li>
);

export default Project;
