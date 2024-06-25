import React, { useEffect, useState } from "react";
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris"],
    correct: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich"],
    correct: "Berlin",
  },
];

function Questian() {
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [question, setQuestian] = useState(questions[0]);
  const [end, setEnd] = useState(false);
  const [response, setResponse] = useState("");

  useEffect(()=>{
    const currentQuestion = questions[index];
    setQuestian(currentQuestion);
},[index])

  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleClick=(question)=>{
    if (selectedOption === question.correct) {
      setScore(score + 1);
      setResponse("correct");
    } else {
      setResponse("InCorrect");
    }

    if (index + 1 < questions.length) {
      setTimeout(() => {
        setIndex(index + 1);
        setSelectedOption("");
        setResponse("");
      }, 1000); // Wait for 1 second before moving to the next question
    } else {
      setEnd(true);
    }
  }



  return (
    <>
      {!end ? (
        <>
          <p>{question?.question}</p>
          {question?.options.map((item, k) => (
            <label key={k}>
              <input
                type="radio"
                name="selectedOption"
                checked={selectedOption === item}
                value={item}
                onChange={handleSelectOption}
              />
              {item}
            </label>
          ))}
          <button onClick={()=>handleClick(question)}>Submit</button>
          {selectedOption !== "" && <p>{response}</p>}
        </>
      ) : (
        <div >
            Quiz completed! Your score: {score} out of {questions.length}
        </div>
      )}
    </>
  );
}
export default Questian;
