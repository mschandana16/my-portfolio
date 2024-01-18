import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey folks!</h1>
        <p className={styles.description}>
          I am Chandana, a CS undergrad at PES University, Bangalore, India. As
          an inquisitive person, I love exploring tech, communities and
          everything in between by gaining hands-on experience and sharing
          insights with fellow enthusiasts.I am intrigued by all things tech,
          with a particular fascination for cloud and web development and am
          eagerly looking forward to contributing to projects and honing my
          skills.
        </p>
        <a
          href="https://drive.google.com/file/d/1r1OVe4FgcCD1ni4xQPnXvH5mppkbepoX/view?usp=sharing"
          className={styles.cvLink}
        >
          View my Resume
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/profilepic-min.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
