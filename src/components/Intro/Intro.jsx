import React from "react";
import styles from "./Intro.module.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className={styles.container}>
      <header className="container__header">
        <h1 className={styles.container__heading}>
          <Link to="/">Edu Edi Games</Link>
        </h1>
      </header>{" "}
      <button className={styles.container__button}>
        <Link to="/game"> Start</Link>
      </button>
      <p className={styles.container__description}>Press start to play</p>
    </div>
  );
};

export default Intro;
