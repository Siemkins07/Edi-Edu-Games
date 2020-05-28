import React, { useState, useEffect } from "react";
import styles from "./Clicker.module.css";
import styled, { keyframes } from "styled-components";
import { merge, pulse, shake } from "react-animations";
// const mix = merge(pulse, shake);
const Shake = styled.div`animation 1s  ${keyframes`${pulse}`} infinite`;

const pointsPerSecond = 0.1;

const Clicker = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setScore((score) => score + pointsPerSecond);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [add, setAdd] = useState(1);
  const [score, setScore] = useState(0);

  const [firstValue, setFirstValue] = useState(10);
  const [twoValue, setTwoValue] = useState(20);
  const [threeValue, setThreeValue] = useState(30);
  const [fourValue, setFourValue] = useState(40);
  const [fiveValue, setFiveValue] = useState(50);
  const [sixValue, setSixValue] = useState(60);
  const [sevenValue, setSevenValue] = useState(70);
  const [eightValue, setEightValue] = useState(80);
  const [nineValue, setNineValue] = useState(90);
  const [tenValue, setTenValue] = useState(100);

  if (score >= 1000) {
    alert("Gratulacje WYGRAŁEŚ!");
  }

  const handleAddOne = () => {
    if (score < firstValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - firstValue);
      setFirstValue(firstValue * 2);
      setAdd(add + 1);
    }
  };

  const handleAddTwo = () => {
    if (score < twoValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - twoValue);
      setTwoValue(twoValue * 2);
      setAdd(add + 2);
    }
  };

  const handleAddThree = () => {
    if (score < threeValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - threeValue);
      setThreeValue(threeValue * 2);
      setAdd(add + 3);
    }
  };

  const handleAddFour = () => {
    if (score < fourValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - fourValue);
      setFourValue(fourValue * 2);
      setAdd(add + 4);
    }
  };

  const handleAddFive = () => {
    if (score < fiveValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - fiveValue);
      setFiveValue(fiveValue * 2);
      setAdd(add + 5);
    }
  };
  const handleAddSix = () => {
    if (score < sixValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - sixValue);
      setSixValue(sixValue * 2);
      setAdd(add + 6);
    }
  };

  const handleAddSeven = () => {
    if (score < sevenValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - sevenValue);
      setSevenValue(sevenValue * 2);
      setAdd(add + 7);
    }
  };

  const handleAddEight = () => {
    if (score < eightValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - eightValue);
      setEightValue(eightValue * 2);
      setAdd(add + 8);
    }
  };

  const handleAddNine = () => {
    if (score < nineValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - nineValue);
      setNineValue(nineValue * 2);
      setAdd(add + 9);
    }
  };

  const handleAddTen = () => {
    if (score < tenValue) {
      alert("masz za malo punktów");
    } else {
      setScore(score - tenValue);
      setTenValue(tenValue * 2);
      setAdd(add + 10);
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.leftColumn}>
        <div className={styles.btns}>
          <button className={styles.btnAdd} onClick={handleAddOne} value={1}>
            +1 point <br /> cost: {firstValue}
          </button>
          <button
            className={styles.btnAdd}
            value={twoValue}
            onClick={handleAddTwo}
          >
            +2 points <br /> cost: {twoValue}
          </button>
          <button
            className={styles.btnAdd}
            value={threeValue}
            onClick={handleAddThree}
          >
            +3 points <br /> cost: {threeValue}
          </button>
          <button
            className={styles.btnAdd}
            value={fourValue}
            onClick={handleAddFour}
          >
            +4 points <br /> cost: {fourValue}
          </button>
          <button
            className={styles.btnAdd}
            value={fourValue}
            onClick={handleAddFive}
          >
            +5 points <br />
            cost: {fiveValue}
          </button>
        </div>
      </aside>
      <div className={styles.centerColumn}>
        <header className={styles.header}>
          clicker
          <br />
          <span>points per klick: {add}</span>
          <br />
          <span>points per second: {(pointsPerSecond / 5).toFixed(2)}</span>
          <br />
          <span style={{ fontSize: "60px" }}>
            Score: {score >= 1000 ? 1000 : score.toFixed(0)}{" "}
          </span>
        </header>
        <div className={styles.square}>
          <Shake>
            <p className={styles.center} onClick={(e) => setScore(score + add)}>
              Klick ME!
            </p>
          </Shake>
        </div>
      </div>
      <aside className={styles.rightColumn}>
        <div className={styles.btns}>
          <button className={styles.btnAddR} onClick={handleAddSix}>
            +6 points <br /> cost: {sixValue}
          </button>
          <button className={styles.btnAddR} onClick={handleAddSeven}>
            +7 points <br /> cost: {sevenValue}
          </button>
          <button className={styles.btnAddR} onClick={handleAddEight}>
            +8 points <br /> cost: {eightValue}
          </button>
          <button className={styles.btnAddR} onClick={handleAddNine}>
            +9 points <br /> cost: {nineValue}
          </button>
          <button className={styles.btnAddR} onClick={handleAddTen}>
            +10 points <br /> cost: {tenValue}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Clicker;
