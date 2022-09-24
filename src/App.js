import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import Spacer from "./Spacer";

import "./LessonList";
import LessonList from "./LessonList";

import "./Tokens";
import Tokens from "./Tokens";

import ExtraResources from "./ExtraResources";

import PracticeTest from "./PracticeTest";

import { courseInformation } from "./CourseInformation";

const App = (props) => {
  const [courseInfo, setCourseInfo] = useState(courseInformation);
  return (
    <>
      <div className="container">
        <LessonList courseInfo={courseInfo}></LessonList>
        <Spacer></Spacer>
        <Tokens courseInfo={courseInfo}></Tokens>
        <Spacer></Spacer>
        <ExtraResources courseInfo={courseInfo}></ExtraResources>
        <Spacer></Spacer>
        <PracticeTest courseInfo={courseInfo}></PracticeTest>
      </div>
    </>
  );
};

export default App;
