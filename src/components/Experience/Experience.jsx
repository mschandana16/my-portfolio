import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
// import toolsPlatforms from "../../data/toolsPlatforms.json";
import pastExp from "../../data/pastExp.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        My
        Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience
      </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/* <div className={styles.toolsPlatforms}>
          {toolsPlatforms.map((toolsPlatform, id) => {
            return (
              <div key={id} className={styles.toolsPlatform}>
                <div className={styles.toolsPlatformImageContainer}>
                  <img
                    src={getImageUrl(toolsPlatform.imageSrc)}
                    alt={toolsPlatform.title}
                  />
                </div>
                <p>{toolsPlatform.title}</p>
              </div>
            );
          })}
        </div> */}
        <ul className={styles.pastExp}>
          {pastExp.map((pastExpItem, id) => {
            return (
              <li key={id} className={styles.pastExpItem}>
                <img
                  src={getImageUrl(pastExpItem.imageSrc)}
                  alt={`${pastExpItem.organisation} Logo`}
                />
                <div className={styles.pastExpItemDetails}>
                  <h3>{`${pastExpItem.role} `}</h3>
                  <h4>{`${pastExpItem.organisation}`}</h4>
                  <p>{`${pastExpItem.startDate} - ${pastExpItem.endDate}`}</p>
                  <ul>
                    {pastExpItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
