import "./LessonList.css";

import { Row, Col } from "react-bootstrap";

const LessonList = (props) => {
  var lessons = props.courseInfo[0].unitLessons;
  console.log(lessons);

  const mappedUnitLessons = lessons.map((lesson, i) => {
    //Set the bullet color and link color dynamically, based on the sub-topic of the lesson
    var color;
    if (lesson.subtopic === 1) {
      color = "rgba(255, 195, 0, 0.25)";
    } else if (lesson.subtopic === 2) {
      color = "rgba(3, 255, 6, 0.25)";
    } else if (lesson.subtopic === 3) {
      color = "rgba(255, 3, 243, 0.25)";
    } else if (lesson.subtopic === 4) {
      color = "rgba(3, 42, 255, 0.25)";
    } else if (lesson.subtopic === 0) {
      color = "rgba(255, 3, 3, 0.25)";
    } else {
      color = "#121212";
    }

    return (
      <li className="item">
        <div className="itemContentContainer">
          <div className="col-2">
            <div className="justifyCenter">
              <div className="colorSquare"></div>
            </div>
          </div>{" "}
          <div className="col-6">
            <a href={lesson.link}>
              <div className="lessonName">{lesson.name}</div>
            </a>{" "}
          </div>
          <div className="col-2">
            <div className="justifyCenter">
              <div className="subtopic">{lesson.subtopic}</div>
            </div>
          </div>
          <div className="col-2">
            <div className="justifyCenter">
              <div className="tokenLL">
                <div className="tokenContentContainerLL">
                  <div className="tokenDotLL"></div>
                  <div className="tokenTextLL">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="wrapper">
      <ul className="listLessons">
        <li className="item" id="header">
          <div className="itemContentContainer">
            <div className="col-2"></div>
            <div className="col-6">
              <div className="heading">Lesson</div>
            </div>
            <div className="col-2">
              <div className="justifyCenter">
                <div className="heading">Subtopic</div>
              </div>
            </div>
            <div className="col-2">
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
