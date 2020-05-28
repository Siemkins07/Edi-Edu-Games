import React from "react";
import styles from "./GameSelect.module.css";
import { Link } from "react-router-dom";

const GameSelect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__square}>
        <Link to="/level"> Numbers with blocks</Link>
      </div>
      <div className={styles.container__square}>
        <Link to="/drawer"> Draw me</Link>
      </div>
      <div className={styles.container__square}>
        <Link to="/clicker"> Click me!</Link>
      </div>
    </div>
  );
};

export default GameSelect;
