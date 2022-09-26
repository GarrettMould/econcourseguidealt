import "./Tokens.css";

import styled from "styled-components";

const Tokens = (props) => {
  const Token = styled.div.attrs((props) => ({
    color: props.color
  }))`
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 2px;
  `;

  const TokenDot = styled.div.attrs((props) => ({
    color: props.color
  }))`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${(props) => props.color};
  `;

  var concepts = props.courseInfo[props.selectedUnit].unitConcepts;
  console.log(concepts);

  var mappedConcepts = concepts.map((concept) => {
    var colorBackground;
    var colorDot;
    if (concept.subtopic === 1) {
      colorDot = "#9BD3CB";
      colorBackground = "#e2f2f0";
    } else if (concept.subtopic === 2) {
      colorDot = "#f9d8cd";
      colorBackground = "#fdf0eb";
    } else if (concept.subtopic === 3) {
      colorDot = "#AEDDE0";
      colorBackground = "#ebf7f8";
    } else if (concept.subtopic === 4) {
      colorDot = "#C0ADC5";
      colorBackground = "#eee9ef";
    } else {
      colorDot = "#777571";
      colorBackground = "#5d5b58";
    }
    return (
      <Token color={colorBackground}>
        <div className="tokenContentContainer">
          <TokenDot color={colorDot}></TokenDot>
          <div className="tokenText">{concept.name}</div>
        </div>
      </Token>
    );
  });
  return <div className="containerTokens">{mappedConcepts}</div>;
};

export default Tokens;
