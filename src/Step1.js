import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/typography";
import { useForm } from "react-hook-form";
import Form from "./components/Form";
import Input from "./components/Input";
import MainContainer from "./components/MainContainer";
import PrimaryButton from "./components/PrimaryButton";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "не должно содержать цифры")
    .required("поле обязательно для заполнения"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "не должно содержать цифры")
    .required("поле обязательно для заполнения"),
});

const Step1 = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    navigate("/step2");
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step - 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="First name"
          name="firstName"
          error={!!formState.errors.firstName}
          helperText={formState.errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Last name"
          name="lastName"
          error={!!formState.errors.lastName}
          helperText={formState.errors?.lastName?.message}

        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
