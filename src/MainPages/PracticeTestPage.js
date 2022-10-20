import Heading from "../Heading";
import Button from "../Button";
import Spacer from "../Spacer";
import PracticeTest from "../PracticeTest";
import { Link } from "react-router-dom";
import TestScore from "../TestScore";

const PracticeTestPage = (props) => {
  return (
    <>
      <Heading text={`Unit ${props.unit} - Practice Test`}></Heading>
      {props.testFinished ? (
        <TestScore
          unitTestLength={props.unitTestLength}
          unitTestScore={props.unitTestScore}
        ></TestScore>
      ) : null}
      <PracticeTest
        forwardedRef={props.forwardedRef}
        courseInfo={props.courseInfo}
        selectedUnit={props.selectedUnit}
        testFinished={props.testFinished}
      ></PracticeTest>
      <Spacer></Spacer>
      <button onClick={props.tallyScore}></button>

      {props.testFinished ? (
        <button onClick={props.resetTest}>Reset Test</button>
      ) : (
        <Link>
          <Button
            selectedUnit={props.selectedUnit}
            courseInfo={props.courseInfo}
            tallyScore={props.tallyScore}
            text="Submit"
          ></Button>
        </Link>
      )}
    </>
  );
};

export default PracticeTestPage;
