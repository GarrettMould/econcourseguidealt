import "./PracticeTest.css";

const PracticeTest = (props) => {
  var practiceTestQuestions = props.courseInfo[0].unitPracticeTest;
  console.log(practiceTestQuestions);

  const mappedPracticeTest = practiceTestQuestions.map((question) => {
    return (
      <div className="cardTest">
        <div className="cardTestRowOne">
          <div className="testQuestion">
            {question.questionNumber}) {question.questionText}{" "}
          </div>
        </div>
        <div className="cardTestRowTwo">
          <div className="testAnswersGroup">
            <div className="testAnswerContainer">
              <input type="radio" className="testRadio" name="q1"></input>
              <label className="testAnswerText">central planning</label>
            </div>
            <div className="testAnswerContainer">
              <input type="radio" className="testRadio" name="q1"></input>
              <label className="testAnswerText">non-price rationing</label>
            </div>
            <div className="testAnswerContainer">
              <input type="radio" className="testRadio" name="q1"></input>
              <label className="testAnswerText">redistribution of income</label>
            </div>
            <div className="testAnswerContainer">
              <input type="radio" className="testRadio" name="q1"></input>
              <label className="testAnswerText">property rights</label>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="wrapperTest">{mappedPracticeTest}</div>;
};

export default PracticeTest;
