import React from "react";
import styles from "./SingleTask.module.css";
import { Redirect } from "react-router-dom";

const SingleTask = ({ questions, newQ, history }) => {
  const allQuestions = questions;
  const randomQuestionId = Math.floor(Math.random() * allQuestions.length);
  const select = allQuestions.slice(randomQuestionId, randomQuestionId + 1);
  console.log(select);

  // const [fetchedCountries, setFetchedCountries] = useState([]);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setFetchedCountries(await fetchCountries())
  //   }
  //   fetchAPI();
  // }, [setFetchedCountries])

  const mapped = select.map((el) => (
    <div className={styles.div} key={el.id}>
      <span>question nr {el.id}</span>
      <p>level {el.level}</p>
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
      <button className={styles.btn_action} onClick={newQ}>
        Next
      </button>
    </div>
  );
};

export default SingleTask;
