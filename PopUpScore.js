import styled from "styled-components";
import StyledButtonClosePopUp from "./ButtonClosePopUp";
const PopUpScore = (props) => {
  const StyledPopUp = styled.div`
    position: fixed;
    width: 50%;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(245, 245, 245);
    opacity: 1 !important;
    z-index: 999;
    border: 1px solid rgb(230, 230, 230);
    margin: 15px;
    transition: box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 75%;
      height: 300px;
    }
  `;

  const FinalScoreTitle = styled.div`
    font-size: 175%;
    font-weight: 600;
    margin-bottom: 25px;
  `;

  const FinalScoreResult = styled.div`
    font-size: 135%;
    margin-bottom: 25px;
  `;

  return (
    <StyledPopUp>
      <FinalScoreTitle>Final Score:</FinalScoreTitle>
      <FinalScoreResult>
        {props.unitTestScore} / {props.unitTestLength}
      </FinalScoreResult>{" "}
      <StyledButtonClosePopUp
        closeModal={props.closeModal}
      ></StyledButtonClosePopUp>
    </StyledPopUp>
  );
};

export default PopUpScore;
