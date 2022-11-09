import { StyledButton, StyledButtonPracticeTest } from "./Buttons.styled.js";

const ButtonResetTest = (props) => {
  return (
    <StyledButtonPracticeTest
      onClick={props.testFinished ? props.resetTest : props.tallyScore}
    >
      {props.testFinished ? "Retake Test" : "Submit"}
    </StyledButtonPracticeTest>
  );
};

export default ButtonResetTest;
