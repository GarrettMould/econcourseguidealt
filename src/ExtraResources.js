import "./ExtraResources.css";

const ExtraResources = (props) => {
  var extraResources = props.courseInfo[0].additionalResources;
  console.log(extraResources);

  const mappedResources = extraResources.map((resource) => {
    return (
      <li className="card">
        <div className="cardContentContainer">
          <div className="cardRowOne">
            <div className="colorSquare"></div>
            <div className="cardType">{resource.type}</div>
          </div>
          <div className="cardRowTwo">
            <a href="#">
              <div className="cardTitle">{resource.name}</div>
            </a>
          </div>
          <div className="cardRowThree">
            <div className="cardDescription">{resource.summary}</div>
          </div>
          <div className="cardRowFour">
            <div className="token">
              <div className="tokenContentContainer">
                <div className="tokenDot"></div>
                <div className="tokenText">Allocative Efficiency</div>
              </div>
            </div>
            <div className="token">
              <div className="tokenContentContainer">
                <div className="tokenDot"></div>
                <div className="tokenText">Allocative Efficiency</div>
              </div>
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
