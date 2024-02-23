import ROUTES from "../../../routes/routesModel";
import useForm from "../../../forms/useForm";
import { initialLoginForm } from "../schema";
import loginValedation from "./loginValedation";
import { Navigate } from "react-router-dom";
import Form from "../../../forms/Form";
import { Box, Container, Paper, Typography } from "@mui/material";
import Input from "../../../forms/Input";
import useHandleUser from "../../hooks/useHandleUser";
import FormLink from "../../../forms/FormLink";

const LoginPage = () => {
  const {
    handleLogin,
    value: { user },
  } = useHandleUser();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginValedation,
    handleLogin
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
            title="התחברות"
            onSubmit={onSubmit}
            onReset={handleReset}
            onFormChange={validateForm}
          >
            <FormLink text="Did not registered yet?" to={ROUTES.SIGNUP} />
            <Input
              label="email"
              name="email"
              type="email"
              data={data}
              error={errors.email}
              onInputChange={handleInputChange}
            />
            <Input
              label="password"
              name="password"
              type="password"
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

export default LoginPage;
