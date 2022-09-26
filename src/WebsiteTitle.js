import styled from "styled-components";

const WebsiteTitle = (props) => {
  const StyledTitle = styled.div`
    font-size: 225%;
    font-family: "Roboto", sans-serif;
    padding: 30px 0px;

    span {
      font-weight: 700;
      font-family: "Roboto", sans-serif;
    }
  `;

  return (
    <StyledTitle>
      <span>Econ</span> Course Guide
    </StyledTitle>
  );
};

export default WebsiteTitle;
