import { Link } from "react-router-dom";

import styled from "styled-components";

const WebsiteTitle = (props) => {
  const StyledTitle = styled.div.attrs((props) => ({
    fontSize: props.fontSize
  }))`
    font-size: 225%;
    font-family: "Roboto", sans-serif;
    padding: 30px 0px;

    span {
      font-weight: 700;
      font-family: "Roboto", sans-serif;
    }

    @media (max-width: 768px) {
      font-size: 175%;
      padding: 20px 0px 30px 0px;
    }
  `;

  return (
    <StyledTitle>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <span>Econ</span> Course Guide
      </Link>
    </StyledTitle>
  );
};

export default WebsiteTitle;
