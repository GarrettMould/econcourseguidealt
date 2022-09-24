import "./Tokens.css";

const Tokens = (props) => {
  var concepts = props.courseInfo[0].unitConcepts;
  console.log(concepts);

  var mappedConcepts = concepts.map((concept) => {
    return (
      <div className="token">
        <div className="tokenContentContainer">
          <div className="tokenDot"></div>
          <div className="tokenText">{concept.name}</div>
        </div>
      </div>
    );
  });
  return <div className="containerTokens">{mappedConcepts}</div>;
};

export default Tokens;
