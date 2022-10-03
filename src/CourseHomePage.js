import { Link } from "react-router-dom";

import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";

import "./CourseHomePage.css";

import padlock from "./images/padlock.png";

const CourseHomePage = (props) => {
  var units = props.courseInfo;

  const HomeCardRowOne = styled.div.attrs((props) => ({
    backgroundColor: props.backgroundColor
  }))`
    background-color: ${(props) => props.backgroundColor};
    height: 300px;
  `;

  const mappedUnits = units.map((unit, i) => {
    return (
      <Col xs={props.isMobile ? 12 : 6}>
        <Link
          to="/UnitOverviewPage"
          className={unit.unitUnlocked ? "enabled-link" : "disabled-link"}
        >
          <div className="homeCardContainer">
            <div
              className="homeCard"
              id={i + 1}
              onClick={props.updateSelectedUnit}
            >
              <div className="homeCardContentContainer">
                <HomeCardRowOne
                  backgroundColor={unit.unitBackgroundColor}
                ></HomeCardRowOne>
                <div className="homeCardRowTwo">
                  <div className="homeCardRowTwoContentContainer">
                    <div className="unitNumber">Unit {unit.unitNumber}</div>
                    <div className="nameIconContainer">
                      <div className="unitName">{unit.unitName}</div>
                      {unit.unitUnlocked ? null : (
                        <div className="svgContainer">
                          <img
                            className="padlock"
                            src={padlock}
                            alt="padlock"
                          ></img>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Col>
    );
  });

  return <Row>{mappedUnits}</Row>;
};

export default CourseHomePage;
