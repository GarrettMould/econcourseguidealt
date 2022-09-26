import styled from "styled-components";

import { LockSimple } from "phosphor-react";

const Button = (props) => {
  const StyledButton = styled.button.attrs((props) => ({
    backgroundColor: props.backgroundColor,
    backgroundColorHover: props.backgroundColorHover,
    cursor: props.cursor
  }))`
    width: 100%;
    height: 60px;
    font-size: 120%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(240, 240, 240);
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;
    transition: all 0.3s;

    &:hover {
      cursor: not-allowed;
    }
  `;

  return (
    <StyledButton>
      {props.text} &nbsp;&nbsp;{" "}
      {props.courseInfo[props.selectedUnit].unitTestUnlocked ? null : (
        <LockSimple size={30} weight="thin" />
      )}
    </StyledButton>
  );
};

export default Button;
