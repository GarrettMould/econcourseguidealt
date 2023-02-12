import styled from "styled-components";
import "./InstructionsBox.css";
import { NotePencil } from "phosphor-react";

const StyledInstructionsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: rgba(245, 245, 245, 0.416);
  padding: 20px 20px 20px 20px;
  border: 1px solid rgb(230, 230, 230);
`;

const InstructionsRowOne = styled.div`
  display: flex;
  flex-direction: row;
`;

const InstructionsRowTwo = styled.div``;

const InstructionsBox = (props) => {
  return (
    <div className="instructionsBox">
      <div className="instructionsRowOne">
        <NotePencil size={25} color="#C0C0C0" />
        <div className="instructionsTitle">Instructions</div>
      </div>
      <div className="instructionsRowTwo">
        <p className="instructionsText">
          Complete the test by choosing the correct answer for each question.
          Use your notes or the lesson Powerpoints to find the relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default InstructionsBox;
