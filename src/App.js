import "./styles.css";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

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
              ></PracticeTestPage>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
