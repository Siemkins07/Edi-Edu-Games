import React from "react";

const Addition = (props) => {
  console.log(props.add);
  const allQuestions = props.add;
  console.log(allQuestions);
  const randomQuestionId = Math.floor(Math.random() * allQuestions.length) + 1;

  const result = allQuestions.map((el) => (
    <div key={el.id} id={el.id}>
      <p>What is the result of {el.content} ?</p>
      <p>level {el.level}</p>
      <p>display {el.display}</p>
    </div>
  ));

  const filteredResult = result.filter((id) => id === randomQuestionId);
  console.log(result);

  return <div>{result}</div>;
};

export default Addition;
