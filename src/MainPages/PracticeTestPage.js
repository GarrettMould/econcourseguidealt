import Heading from "../Heading";
import Button from "../Button";
import Spacer from "../Spacer";
import PracticeTest from "../PracticeTest";
import { Link } from "react-router-dom";
import TestScore from "../TestScore";
import ButtonResetTest from "../ButtonResetTest";
import PopUpScore from "../PopUpScore";
import InstuctionsBox from "../InstructionsBox";

const PracticeTestPage = (props) => {
  return (
    <>
      <Heading text={`Unit ${props.unit} - Practice Test`}></Heading>
      <InstuctionsBox></InstuctionsBox>
      <PracticeTest
        forwardedRef={props.forwardedRef}
        courseInfo={props.courseInfo}
        selectedUnit={props.selectedUnit}
        testFinished={props.testFinished}
      ></PracticeTest>
      <Spacer></Spacer>

      <Link>
        <ButtonResetTest
          testFinished={props.testFinished}
          tallyScore={props.tallyScore}
          resetTest={props.resetTest}
        ></ButtonResetTest>
      </Link>
    </>
  );
};

export default PracticeTestPage;
