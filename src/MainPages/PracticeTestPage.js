import Heading from "../Heading";
import Button from "../Button";
import Spacer from "../Spacer";
import PracticeTest from "../PracticeTest";

const PracticeTestPage = (props) => {
  return (
    <>
      <Heading text={`Unit ${props.unit} - Practice Test`}></Heading>
      <PracticeTest
        courseInfo={props.courseInfo}
        selectedUnit={props.selectedUnit}
      ></PracticeTest>
      <Spacer></Spacer>
      <Button
        selectedUnit={props.selectedUnit}
        courseInfo={props.courseInfo}
        text="Submit"
      ></Button>
    </>
  );
};

export default PracticeTestPage;
