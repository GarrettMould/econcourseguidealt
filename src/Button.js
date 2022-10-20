import styled from "styled-components";
import { StyledButton } from "./Buttons.styled";

import padlock from "../src/images/padlock.png";

const Button = (props) => {
  return (
    <StyledButton onClick={props.tallyScore}>
      {props.text} &nbsp;&nbsp;{" "}
      {props.courseInfo[props.selectedUnit].unitTestUnlocked ? null : (
        <img className="padlock" src={padlock}></img>
      )}
    </StyledButton>
  );
};

export default Button;
