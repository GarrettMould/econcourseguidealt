import "./styles.css";

import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect, useRef } from "react";

import WebsiteTitle from "./WebsiteTitle";

import CourseHomePage from "./CourseHomePage";

import UnitOverviewPage from "./MainPages/UnitOverviewPage";

import PracticeTestPage from "./MainPages/PracticeTestPage";

import { courseInformation } from "./CourseInformation";

const App = (props) => {
  const [courseInfo, setCourseInfo] = useState(courseInformation);
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [selectedUnitDisplay, setSelectedUnitDisplay] = useState(
    selectedUnit + 1
  );

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [unitTestScore, setUnitTestScore] = useState(0);
  const [unitTestLength, setUnitTestLength] = useState(null);
  const [testFinished, setTestFinished] = useState(false);
  const [incorrectQuestionsList, setIncorrectQuestionsList] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState(false);

  const forwardedRef = useRef();

  useEffect(() => {
    console.log(forwardedRef.current);
  });

  // Reading device width and updating state on change
  useEffect(() => {
    handleWindowSizeChange();
  });

  const handleWindowSizeChange = () => {
    setDeviceWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWindowSizeChange);

  console.log(deviceWidth);

  // Variable that returns true if device width is less than 500 (use this for mobile styling)

  const isMobile = deviceWidth <= 500;

  console.log(isMobile);

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

  // If test submitted but unansweredQuestions is true, highlight unansweredQuestions

  const highlightUnanswered = () => {
    const questions = document.querySelectorAll(".cardTest");

    console.log(questions);

    questions.forEach((q) => {
      var inputElements = q.querySelectorAll("input:checked");
      console.log(inputElements);

      if (inputElements.length === 0) {
        const blah = q.closest(".cardTest");
        blah.classList.add("redBorder");
      } else {
        const blah = q.closest(".cardTest");
        blah.classList.remove("redBorder");
      }
    });
  };

  // Run when test is submitted (check if all questions have been answered)
  const tallyScore = () => {
    var questionsLength = courseInfo[selectedUnit].unitPracticeTest.length;
    setUnitTestLength(questionsLength);
    console.log(questionsLength);

    var question = document.querySelectorAll(".testRadio:checked");

    let localScore = unitTestScore;

    var incorrectQuestions = [];

    console.log(question.length);

    // Runs if all questions have been answered
    if (question.length === questionsLength) {
      question.forEach((q) => {
        if (q.value === "true") {
          localScore = localScore + 1;
        } else {
          //If the answer is incorrect, add that question to the list of incorrect questions
          const incorrectQuestion = q.closest(".cardTest");
          const incorrectQuestionID = q.closest(".cardTest").id;
          incorrectQuestions.push(incorrectQuestionID);
          incorrectQuestion.classList.add("red");
        }
        //Set the final score and set the test to finished (which causes resultsBox to be displayed)
        forwardedRef.current.scrollIntoView({ behavior: "smooth" });
        setUnitTestScore(localScore);
        setTestFinished(true);
        console.log(localScore);
        console.log(unitTestScore);
      });

      setIncorrectQuestionsList(incorrectQuestions);

      // Run this if there are unanswered questions
    } else {
      setUnansweredQuestions(true);
      highlightUnanswered();
      console.log(unitTestLength - question.length);
      forwardedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reset the test

  const resetTest = () => {
    setUnansweredQuestions(false);
    setIncorrectQuestionsList([]);
    setTestFinished(false);
    setUnitTestScore(0);
    setUnitTestLength(0);

    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "radio") {
        inputs[i].checked = false;
      }
    }

    var questionCard = document.querySelector(".cardTest");

    questionCard.classList.remove("red");

    forwardedRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="containerApp">
        <WebsiteTitle></WebsiteTitle>
        <Routes>
          <Route
            path="/"
            element={
              <CourseHomePage
                isMobile={isMobile}
                courseInfo={courseInfo}
                selectedUnit={selectedUnit}
                updateSelectedUnit={updateSelectedUnit}
              ></CourseHomePage>
            }
          />
          <Route
            path="/UnitOverviewPage"
            element={
              <UnitOverviewPage
                unit={unit}
                isMobile={isMobile}
                courseInfo={courseInfo}
                selectedUnit={selectedUnit}
                updateSelectedUnit={updateSelectedUnit}
              ></UnitOverviewPage>
            }
          />
          <Route
            path="/UnitPracticeTest"
            element={
              <PracticeTestPage
                unit={unit}
                courseInfo={courseInfo}
                selectedUnit={selectedUnit}
                tallyScore={tallyScore}
                resetTest={resetTest}
                forwardedRef={forwardedRef}
                testFinished={testFinished}
                unitTestLength={unitTestLength}
                unitTestScore={unitTestScore}
              ></PracticeTestPage>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
