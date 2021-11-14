import Typography from "@material-ui/core/typography";
import MainContainer from "./components/MainContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "./components/Form";
import Input from "./components/Input";
import PrimaryButton from "./components/PrimaryButton";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("соблюдайте формат email")
    .required("поле обязательно для заполнения"),
});
const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

const Step2 = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState, watch } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    navigate("/step3");
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!formState.errors.email}
          helperText={formState.errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="hasPhone"
              {...register("hasPhone")}
              color="primary"
              onClick={(e) =>
                console.log(e.target.checked, "e.target.valuee.target.value")
              }
            />
          }
          label="Do you have a phone?"
        />
        {hasPhone && (
          <Input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            label="Phone number"
            name="phoneNumber"
            onChange={(e) =>
              (e.target.value = normalizePhoneNumber(e.target.value))
            }
          />
        )}

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
