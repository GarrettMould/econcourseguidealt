import "./LessonList.css";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const LessonList = (props) => {
  var lessons = props.courseInfo[props.selectedUnit].unitLessons;
  console.log(lessons);

  const ColorSquare = styled.div.attrs((props) => ({
    color: props.color
  }))`
    height: 25px;
    width: 25px;
    background-color: ${(props) => props.color};
    border: 1px solid transparent;
    border-radius: 3px;
  `;

  const TokenLL = styled.div.attrs((props) => ({
    color: props.color
  }))`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background-color: ${(props) => props.color};
    border-radius: 2px;
  `;

  const TokenLLDot = styled.div.attrs((props) => ({
    color: props.color
  }))`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${(props) => props.color};

    @media (max-width: 768px) {
      margin-right: 0px;
    }
  `;

  const mappedUnitLessons = lessons.map((lesson, i) => {
    //Set the bullet color and link color dynamically, based on the sub-topic of the lesson
    var color;
    var colorToken;
    var colorTokenDot;
    var text;

    if (lesson.completed) {
      colorToken = "#e7f9ed";
      colorTokenDot = "#52e583";
      text = "Completed";
    } else {
      colorToken = "#ffdad8";
      colorTokenDot = "#ff8983";
      text = "Incomplete";
    }

    if (lesson.subtopic === 1) {
      color = "#9BD3CB";
    } else if (lesson.subtopic === 2) {
      color = "#f9d8cd";
    } else if (lesson.subtopic === 3) {
      color = "#AEDDE0";
    } else if (lesson.subtopic === 4) {
      color = "#C0ADC5";
    } else {
      color = "#777571";
    }

    return (
      <li className="item">
        <div className="itemContentContainer">
          <div className="col-2">
            <div className="justifyCenter">
              <ColorSquare color={color}></ColorSquare>
            </div>
          </div>{" "}
          <div className={props.isMobile ? "col-7" : "col-6"}>
            <a href={lesson.link} target="_blank">
              <div className="lessonName">{lesson.name}</div>
            </a>{" "}
          </div>
          {props.isMobile ? null : (
            <div className="col-2">
              <div className="justifyCenter">
                <div className="subtopic">
                  {lesson.subtopic === 0 ? null : lesson.subtopic}
                </div>
              </div>
            </div>
          )}
          <div className={props.isMobile ? "col-3" : "col-2"}>
            <div className="justifyCenter">
              <TokenLL color={colorToken}>
                <div className="tokenContentContainerLL">
                  <TokenLLDot color={colorTokenDot}></TokenLLDot>
                  {props.isMobile ? null : (
                    <div className="tokenTextLL">{text}</div>
                  )}
                </div>
              </TokenLL>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="wrapper">
      <ul className="listLessons">
        <li className="item">
          <div className="itemContentContainer" id="header">
            <div className="col-2"></div>
            <div className={props.isMobile ? "col-7" : "col-6"}>
              <div className="heading">Lesson</div>
            </div>
            {props.isMobile ? null : (
              <div className="col-2">
                <div className="justifyCenter">
                  <div className="heading">Subtopic</div>
                </div>
              </div>
            )}

            <div className={props.isMobile ? "col-3" : "col-2"}>
              <div className="justifyCenter">
                <div className="heading">Status</div>
              </div>
            </div>
          </div>
        </li>
        {mappedUnitLessons}
      </ul>
    </div>
  );
};

export default LessonList;
