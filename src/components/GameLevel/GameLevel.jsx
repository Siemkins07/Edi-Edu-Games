import React from "react";
import styles from "./GameLevel.module.css";
import { Link } from "react-router-dom";

const GameLevel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Select game level</div>
      <div className={styles.options}>
        <Link to="operations">
          <button
            name="easy"
            value="easy"
            className={styles.easy}
            onClick={props.selectLevel}
          >
            Easy
          </button>
        </Link>
        <Link to="operations">
          <button
            name="medium"
            value="medium"
            className={styles.medium}
            onClick={props.selectLevel}
          >
            Medium
          </button>
        </Link>
        <Link to="operations">
          <button
            name="hard"
            value="hard"
            className={styles.hard}
            onClick={props.selectLevel}
          >
            Hard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameLevel;
