import { Box, Container, Paper, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useForm from "../../../forms/useForm";
import { initialSignupForm } from "../schema";
import signupValedation from "./signupValedation";

import Form from "../../../forms/Form";
import Input from "../../../forms/Input";
import useHandleUser from "../../hooks/useHandleUser";
import FormLink from "../../../forms/FormLink";

const SignupPage = () => {
  const {
    handleSignup,
    value: { user },
  } = useHandleUser();

  /*  const {
    value = () => {
      return { isLoading, error, user };
    },
    ...rest
  } = useForm(initialSignupForm, signupValedation, handleSignup); */

  const { value, ...rest } = useForm(
    initialSignupForm,
    signupValedation,
    handleSignup
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

  if (user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 7, mb: 12 }}>
        <Paper
          sx={{
            py: { xs: 4, md: 8 },
            px: { xs: 3, md: 6 },
            bgcolor: "#fff5f8",
          }}
        >
          <Form
            title="הרשמה"
            onSubmit={onSubmit}
            onReset={handleReset}
            onFormChange={validateForm}
          >
            <FormLink text="Did not registered yet?" to={ROUTES.LOGIN} />
            <Input
              label="name"
              name="name"
              data={data}
              error={errors.name}
              onInputChange={handleInputChange}
            />

            <Input
              label="phone"
              name="phone"
              data={data}
              error={errors.phone}
              onInputChange={handleInputChange}
            />

            <Input
              type="email"
              label="Email"
              // margin="normal"
              name="email"
              data={data}
              error={errors.email}
              onInputChange={handleInputChange}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              // margin="normal"
              data={data}
              error={errors.password}
              onInputChange={handleInputChange}
            />
          </Form>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignupPage;
