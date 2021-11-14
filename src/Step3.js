import { Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import FileUpload from "./components/FileUpload";
import Form from "./components/Form";
import MainContainer from "./components/MainContainer";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";


const Step3 = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    navigate("/result")
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step - 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileUpload name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
