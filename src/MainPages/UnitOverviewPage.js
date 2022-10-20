import Heading from "../Heading";
import Spacer from "../Spacer";
import LessonList from "../LessonList";
import Tokens from "../Tokens";
import ExtraResources from "../ExtraResources";
import ExtraResourcesMobile from "../ExtraResourcesMobile";
import Button from "../Button";
import { Link } from "react-router-dom";

const UnitOverviewPage = (props) => {
  return (
    <>
      <Heading
        fontSize={props.isMobile ? "150%" : "175%"}
        text={`Unit ${props.unit} - Lesson Materials`}
      ></Heading>
      <LessonList
        unit={props.unit}
        isMobile={props.isMobile}
        courseInfo={props.courseInfo}
        selectedUnit={props.selectedUnit}
      ></LessonList>
      <Spacer></Spacer>
      <Heading text={`Unit ${props.unit} - Important Concepts`}></Heading>
      <Tokens
        courseInfo={props.courseInfo}
        selectedUnit={props.selectedUnit}
      ></Tokens>
      <Spacer></Spacer>
      <Heading text={`Unit ${props.unit} - Extra Resources`}></Heading>
      {props.isMobile ? (
        <ExtraResourcesMobile
          courseInfo={props.courseInfo}
          selectedUnit={props.selectedUnit}
        ></ExtraResourcesMobile>
      ) : (
        <ExtraResources
          courseInfo={props.courseInfo}
          selectedUnit={props.selectedUnit}
        ></ExtraResources>
      )}
      <Spacer></Spacer>
      <Link to="/UnitPracticeTest">
        <Button
          selectedUnit={props.selectedUnit}
          courseInfo={props.courseInfo}
          text={`Unit ${props.unit} Practice Test`}
        ></Button>
      </Link>
    </>
  );
};

export default UnitOverviewPage;
