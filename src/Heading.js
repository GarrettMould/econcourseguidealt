import styled from "styled-components";

const Heading = (props) => {
  const StyledHeading = styled.div`
    font-size: 175%;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    padding: 30px 0px;

    @media (max-width: 768px) {
      font-size: 150%;
    }
  `;
  return <StyledHeading>{props.text}</StyledHeading>;
};

export default Heading;
