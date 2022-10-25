import { StyledButtonClosePopUp } from "./Buttons.styled";

const ButtonClosePopUp = (props) => {
  return (
    <StyledButtonClosePopUp onClick={props.closeModal}>
      Close
    </StyledButtonClosePopUp>
  );
};

export default ButtonClosePopUp;
