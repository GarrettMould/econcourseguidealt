import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import Spacer from "./Spacer";

import WebsiteTitle from "./WebsiteTitle";

import CourseHomePage from "./CourseHomePage";

import "./LessonList";
import LessonList from "./LessonList";

import "./Tokens";
import Tokens from "./Tokens";

import ExtraResources from "./ExtraResources";

import PracticeTest from "./PracticeTest";

import Heading from "./Heading";

import Button from "./Button";

import { courseInformation } from "./CourseInformation";

const App = (props) => {
  const [courseInfo, setCourseInfo] = useState(courseInformation);
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [selectedUnitDisplay, setSelectedUnitDisplay] = useState(
    selectedUnit + 1
  );

  const updateSelectedUnit = (e) => {
    var id = e.currentTarget.id;
    console.log(id);
    if (id === "1") {
      setSelectedUnit(0);
    } else if (id === "2") {
      setSelectedUnit(1);
    } else if (id === "3") {
      setSelectedUnit(2);
    } else if (id === "4") {
      setSelectedUnit(3);
    } else {
      setSelectedUnit(0);
      alert("Error");
    }
  };

  var unit = courseInfo[selectedUnit].unitNumber;

  return (
    <>
      <div className="container">
        <WebsiteTitle></WebsiteTitle>
        <CourseHomePage
          courseInfo={courseInfo}
          updateSelectedUnit={updateSelectedUnit}
        ></CourseHomePage>
        <Heading text={`Unit ${unit} - Lesson Materials`}></Heading>
        <LessonList
          courseInfo={courseInfo}
          selectedUnit={selectedUnit}
        ></LessonList>
        <Spacer></Spacer>
        <Heading text={`Unit ${unit} - Important Concepts`}></Heading>
        <Tokens courseInfo={courseInfo} selectedUnit={selectedUnit}></Tokens>
        <Spacer></Spacer>
        <Heading text={`Unit ${unit} - Extra Resources`}></Heading>
        <ExtraResources
          courseInfo={courseInfo}
          selectedUnit={selectedUnit}
        ></ExtraResources>
        <Spacer></Spacer>

        <Button
          selectedUnit={selectedUnit}
          courseInfo={courseInfo}
          text={`Unit ${unit} Practice Test`}
        ></Button>
        <Spacer></Spacer>
        <Heading text={`Unit ${unit} - Practice Test`}></Heading>
        <PracticeTest
          courseInfo={courseInfo}
          selectedUnit={selectedUnit}
        ></PracticeTest>
        <Spacer></Spacer>
        <Button
          selectedUnit={selectedUnit}
          courseInfo={courseInfo}
          text="Submit"
        ></Button>
      </div>
    </>
  );
};

export default App;
