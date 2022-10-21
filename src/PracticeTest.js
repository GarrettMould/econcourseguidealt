import "./PracticeTest.css";

const PracticeTest = ({ forwardedRef, ...props }) => {
  var practiceTestQuestions =
    props.courseInfo[props.selectedUnit].unitPracticeTest;
  console.log(practiceTestQuestions);

  console.log(props.testFinished);

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
          {question.image ? (
            <img
              alt="alt"
              className="testQuestionImage"
              src={question.image}
            ></img>
          ) : null}
        </div>
        <div className="cardTestRowTwo">
          <div className="testAnswersGroup">
            <div className="testAnswerContainer">
              <label className="testAnswerText">
                <input
                  type="radio"
                  className="testRadio"
                  disabled={props.testFinished ? true : false}
                  name={question.questionNumber}
                  value={question.options[0].isCorrect}
                ></input>
                {question.options[0].name}
              </label>
            </div>
            <div className="testAnswerContainer">
              <label className="testAnswerText">
                <input
                  type="radio"
                  className="testRadio"
                  disabled={props.testFinished ? true : false}
                  name={question.questionNumber}
                  value={question.options[1].isCorrect}
                ></input>
                {question.options[1].name}
              </label>
            </div>
            {question.options[2] ? (
              <div className="testAnswerContainer">
                <label className="testAnswerText">
                  <input
                    type="radio"
                    className="testRadio"
                    disabled={props.testFinished ? true : false}
                    name={question.questionNumber}
                    value={question.options[2].isCorrect}
                  ></input>
                  {question.options[2].name}
                </label>
              </div>
            ) : null}
            {question.options[3] ? (
              <div className="testAnswerContainer">
                <label className="testAnswerText">
                  <input
                    type="radio"
                    className="testRadio"
                    disabled={props.testFinished ? true : false}
                    name={question.questionNumber}
                    value={question.options[3].isCorrect}
                  ></input>
                  {question.options[3].name}
                </label>
              </div>
            ) : null}
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
