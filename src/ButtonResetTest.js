import { StyledButton } from "./Buttons.styled.js";

const ButtonResetTest = (props) => {
  return (
    <StyledButton
      onClick={props.testFinished ? props.resetTest : props.tallyScore}
    >
      {props.testFinished ? "Reset Test" : "Submit"}
    </StyledButton>
  );
};

export default ButtonResetTest;
