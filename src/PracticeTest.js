import "./PracticeTest.css";
import TestScore from "./TestScore";
const PracticeTest = ({ forwardedRef, ...props }) => {
  var practiceTestQuestions =
    props.courseInfo[props.selectedUnit].unitPracticeTest;
  console.log(practiceTestQuestions);

  const mappedPracticeTest = practiceTestQuestions.map((question, i) => {
    return (
      <div
        className="cardTest"
        key={question.questionNumber}
        id={question.questionNumber}
      >
        <div className="cardTestRowOne">
          <div className="testQuestion">
            {question.questionNumber}) {question.questionText}{" "}
          </div>
        </div>
        <div className="cardTestRowTwo">
          <div className="testAnswersGroup">
            <div className="testAnswerContainer">
              <input
                type="radio"
                className="testRadio"
                name={question.questionNumber}
                value={question.options[0].isCorrect}
              ></input>
              <label className="testAnswerText">central planning</label>
            </div>
            <div className="testAnswerContainer">
              <input
                type="radio"
                className="testRadio"
                name={question.questionNumber}
                value={question.options[1].isCorrect}
              ></input>
              <label className="testAnswerText">non-price rationing</label>
            </div>
            <div className="testAnswerContainer">
              <input
                type="radio"
                className="testRadio"
                name={question.questionNumber}
                value={question.options[2].isCorrect}
              ></input>
              <label className="testAnswerText">redistribution of income</label>
            </div>
            <div className="testAnswerContainer">
              <input
                type="radio"
                className="testRadio"
                name={question.questionNumber}
                value={question.options[3].isCorrect}
              ></input>
              <label className="testAnswerText">property rights</label>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="wrapperTest" ref={forwardedRef}>
      {mappedPracticeTest}
    </div>
  );
};

export default PracticeTest;
