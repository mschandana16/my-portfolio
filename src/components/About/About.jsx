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
                react apps as my canvas to create art with css. (Cringe intended
                ;) ){" "}
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
                C++ is love! Nevertheless, I can code proficiently in C/C++,
                Python and Javascript. Currently dabbling in Go. Last time I
                used Java was 4 years ago :|
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
              <h3>
                Cloud and Web Dev enthusiast | AIML novice | Open-Source lover
              </h3>
              <p>
                I'm presently engaged in research related to edge computing at
                my university. Exploring the world of AI, by tackling little
                projects. I'm also a huge fan of open source and have
                contributed to a few repos.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
