import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
// import { Preloader } from "./components/Preloader/Preloader";
import { Projects } from "./components/Projects/Projects";

function App() {
  // const [preloaderDone, setPreloaderDone] = useState(false);

  /* useEffect(() => {
    // Simulating some asynchronous task, e.g., loading assets
    const fakeAsyncTask = () => {
      setTimeout(() => {
        setPreloaderDone(true);
      }, 5000); // Adjust the duration based on your needs
    };

    fakeAsyncTask();
  }, []); */

  return (
    <div className={styles.App}>
      {/* {preloaderDone ? ( */}
      {/* <> */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* </> */}
      {/* ) : ( */}
      {/* <Preloader /> */}
      {/* )} */}
    </div>
  );
}

export default App;
