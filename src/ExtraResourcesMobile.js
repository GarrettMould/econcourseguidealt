import "./ExtraResources.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Row, Col } from "react-bootstrap";

import styled from "styled-components";

const ExtraResourcesMobile = (props) => {
  var extraResources = props.courseInfo[props.selectedUnit].additionalResources;
  console.log(extraResources);

  const ColorSquare = styled.div.attrs((props) => ({
    color: props.color
  }))`
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.color};
    border: 1px solid transparent;
    border-radius: 3px;
  `;

  const TokenER = styled.div.attrs((props) => ({
    color: props.color
  }))`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background-color: ${(props) => props.color};
    border-radius: 2px;
    max-height: 45px;
  `;

  const TokenDotER = styled.div.attrs((props) => ({
    color: props.color
  }))`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${(props) => props.color};
  `;

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
      <SwiperSlide>
        <div className="col-12">
          <li className="card">
            <div className="cardRowOne">
              <ColorSquare color={color}></ColorSquare>
              <div className="cardType">{resource.type}</div>
            </div>
            <div className="cardRowTwo">
              <a href={resource.link} target="_blank">
                <div className="cardTitle">{resource.name}</div>
              </a>

              <div className="cardDescription">{resource.summary}</div>
            </div>

            <div className="cardRowFour">
              {resource.concepts.slice(0, 2).map((concept, i) => {
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
                  <TokenER color={colorBackground}>
                    <div className="tokenContentContainerER">
                      <TokenDotER color={colorDot}></TokenDotER>
                      <div className="tokenTextER">{concept.name}</div>
                    </div>
                  </TokenER>
                );
              })}
            </div>
          </li>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {mappedResources}
    </Swiper>
  );
};

export default ExtraResourcesMobile;
