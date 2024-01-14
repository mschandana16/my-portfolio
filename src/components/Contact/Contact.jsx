import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}></div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:chandanasuresh2004@gmail.com">
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
              className={styles.icon}
            />
          </a>

          <a href="mailto:chandanasuresh2004@gmail.com">
            chandanasuresh2004@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/chandana-m-s/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
          </a>

          <a href="https://www.linkedin.com/in/chandana-m-s/">chandana-m-s</a>
        </li>

        <li className={styles.link}>
          <a href="https://github.com/mschandana16">
            {" "}
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
              className={styles.icon}
            />
          </a>

          <a href="https://github.com/mschandana16">mschandana16</a>
        </li>
      </ul>
    </footer>
  );
};
