import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      {/* <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      /> */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {/* <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul> */}
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={source} className={styles.link}>
          Source Code
        </a>
      </div>
    </div>
  );
};

/* return (
  <div className={styles.wrapper}>
    <div className={container}>
      <input type="radio" name="slide" id="c1" checked />
      <label for="c1" className={styles.card}>
        <div className={styles.row}>
          <div className={styles.icon}>1</div>
          <div className={styles.description}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          Source Code
        </a>
      </div>
    </div>
  </div>
); */
