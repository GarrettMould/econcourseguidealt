import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";

import "./CourseHomePage.css";

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
      <Col xs={6}>
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
                  <div className="unitName">{unit.unitName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <Container className="gx-0">
      <Row>{mappedUnits}</Row>
    </Container>
  );
};

export default CourseHomePage;
