import "./TestScore.css";

const TestScore = (props) => {
  return (
    <div className="testScoreContainer">
      <div className="testScore">
        <span className="scoreBold">Score:</span> {props.unitTestScore} /{" "}
        {props.unitTestLength}
      </div>
    </div>
  );
};

export default TestScore;
