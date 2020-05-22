import React from "react";
import styles from "./Intro.module.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className={styles.container}>
      <button className={styles.container__button}>
        <Link to="/level"> Start</Link>
      </button>
      <p className={styles.container__description}>Press start to play</p>
    </div>
  );
};

export default Intro;
