import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
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
`;

export const StyledButtonClosePopUp = styled.button`
  width: 50%;
  height: 40px;
  font-size: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;
  transition: all 0.3s;
`;
