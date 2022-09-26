import "./ExtraResources.css";

import styled from "styled-components";

const ExtraResources = (props) => {
  const ColorSquare = styled.div.attrs((props) => ({
    color: props.color
  }))`
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.color};
    border: 1px solid transparent;
    border-radius: 3px;
  `;

  var extraResources = props.courseInfo[props.selectedUnit].additionalResources;
  console.log(extraResources);

  const mappedResources = extraResources.map((resource) => {
    var color;
    if (resource.subtopic === 1) {
      color = "#9BD3CB";
    } else if (resource.subtopic === 2) {
      color = "#f9d8cd";
    } else if (resource.subtopic === 3) {
      color = "#AEDDE0";
    } else if (resource.subtopic === 4) {
      color = "#C0ADC5";
    } else {
      color = "#777571";
    }

    return (
      <li className="card">
        <div className="cardRowOne">
          <ColorSquare color={color}></ColorSquare>
          <div className="cardType">{resource.type}</div>
        </div>
        <div className="cardRowTwo">
          <a href="#">
            <div className="cardTitle">{resource.name}</div>
          </a>

          <div className="cardDescription">{resource.summary}</div>
        </div>

        <div className="cardRowFour">
          <div className="tokenER">
            <div className="tokenContentContainerER">
              <div className="tokenDotER"></div>
              <div className="tokenTextER">Allocative Efficiency</div>
            </div>
          </div>
          <div className="tokenER">
            <div className="tokenContentContainerER">
              <div className="tokenDotER"></div>
              <div className="tokenTextER">Allocative Efficiency</div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="wrapper">
      <ul className="listCards">{mappedResources}</ul>
    </div>
  );
};

export default ExtraResources;
