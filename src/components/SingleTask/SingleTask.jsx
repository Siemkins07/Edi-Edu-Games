import React, { useState, useEffect } from "react";
import styles from "./SingleTask.module.css";
import { fetchData } from "../../api";

const SingleTask = ({ history, operator }) => {
  const [questions, setQuestions] = useState([]);

  console.log(operator);
  useEffect(() => {
    const fetchApi = async () => {
      setQuestions(await fetchData());
    };
    fetchApi();
  }, [setQuestions]);

  const allQuestions = questions; //wszystkie zadania
  const additionQuestions = allQuestions.filter((el) => el.type === "addition");
  const subtractionQuestions = allQuestions.filter(
    (el) => el.type === "subtraction"
  );
  const multiplyQuestions = allQuestions.filter((el) => el.type === "multiply");
  const divideQuestions = allQuestions.filter((el) => el.type === "divide");

  console.log("dodawanie", additionQuestions);
  console.log("odejmowanie", subtractionQuestions);

  let mapped = null;
  let select;

  if (operator === "addition") {
    const randomQuestionId =
      Math.floor(Math.random() * additionQuestions.length) + 1;
    const select = additionQuestions.slice(
      randomQuestionId - 1,
      randomQuestionId
    );
    mapped = select.map((el) => (
      <div className={styles.div} key={el.id}>
        <span>question nr {el.id}</span>
        <p>type: {el.type}</p>
        <br></br>
        <p>How much does it equal?</p>
        <h3 style={{ fontSize: "70px" }}>
          {el.content} =
          <input
            onChange={(e) => e.target.value}
            id="input"
            className={styles.input}
            type="number"
            autoFocus
          />
        </h3>
      </div>
    ));
  }

  const handleScoreCheck = (e) => {
    e.preventDefault();
    const input = document.getElementById("input");
    input.style.borderColor = "black";
    if (select[0].answerOk === input.value) {
      input.style.background = select[0].background;
    } else input.style.borderColor = "red";
  };

  const handleReset = () => {
    const input = document.getElementById("input");
    input.value = "";
    input.style.borderColor = "black";
    input.style.backgroundColor = "transparent";
  };

  const handleFinishGame = () => {
    if (window.confirm("sure?")) {
      history.push(`/`);
    }
  };

  const handleNext = async () => {
    const fetchedData = await fetchData();
    setQuestions(fetchedData);
  };

  return (
    <div className={styles.container}>
      {mapped}

      <button className={styles.btn_action} onClick={handleScoreCheck}>
        Check
      </button>
      <button className={styles.btn_action} onClick={handleReset}>
        Retry
      </button>
      <button className={styles.btn_action} onClick={handleFinishGame}>
        Finish
      </button>
      <button className={styles.btn_action} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default SingleTask;
