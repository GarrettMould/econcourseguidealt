import styled from "styled-components";

const Heading = (props) => {
  const StyledHeading = styled.div`
    font-size: 175%;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    padding: 40px 0px;
  `;
  return <StyledHeading>{props.text}</StyledHeading>;
};

export default Heading;
