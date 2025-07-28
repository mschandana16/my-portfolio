import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/frontend.png")}
              alt="frontend icon"
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Budding Frontend Developer</h3>
              <p>
                I've always loved Art&Craft sessions at school and I now view
                React apps as my canvas. (Cringe intended ;) ){" "}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/coder.png")}
              alt="coder icon"
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Programmer</h3>
              <p>
                C++ is love! Nevertheless, I code in C/C++, Python and
                Javascript. Dabbling with java at work cuurently!
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cloud.png")}
              alt="cloud icon"
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Web Dev enthusiast | AI-ML novice | Open-Source lover</h3>
              <p>
                Exploring the world of AI, by tackling little projects. I'm also
                a huge fan of open source and have contributed to a few repos.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
