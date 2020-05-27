import React from "react";
import styles from "./Operations.module.css";
import { Link } from "react-router-dom";

const Operations = ({ operator, selectOperator }) => {
  console.log(operator);
  return (
    <div className={styles.container}>
      <div className={styles.header}>Select math operation</div>
      <div className={styles.options}>
        <Link to="/single">
          <button
            value="addition"
            className={styles.operand}
            onClick={selectOperator}
            style={{ backgroundColor: "red" }}
          >
            +
          </button>
        </Link>
        <Link to="/single">
          <button
            value="subtraction"
            className={styles.operand}
            onClick={selectOperator}
            style={{ backgroundColor: "green" }}
          >
            -
          </button>
        </Link>
        <Link to="/single">
          <button
            value="multiply"
            className={styles.operand}
            style={{ backgroundColor: "magenta" }}
          >
            &#215;
          </button>
        </Link>
        <Link to="/single">
          <button
            value="divide"
            className={styles.operand}
            style={{ backgroundColor: "cyan" }}
          >
            &#247;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Operations;
