import { useCallback, useState } from "react";
import { LoginType, TokenType } from "../signup/userTypes";
import { login } from "../../api/userApi";
import { getUser, setTokenInLocalStorage } from "../../api/localStorage";
import { useUser } from "../../../App";
import ROUTES from "../../../routes/routesModel";
import useForm from "../../../forms/useForm";
import { initialLoginForm } from "../schema";
import loginValedation from "./loginValedation";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Form from "../../../forms/Form";
import { Box, Container, Paper, Typography } from "@mui/material";
import Input from "../../../forms/Input";

type ErrorType = null | string;

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const { setUser, setToken, user } = useUser();
  const navigate = useNavigate();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    user: null | TokenType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setUser(user);
  };

  const handleLogin = useCallback(
    async (user: LoginType) => {
      try {
        setLoading(true);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, userFromLocalStorage);
        navigate(ROUTES.ROOT);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [setToken]
  );

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
          <Typography
            variant="h3"
            gutterBottom
            // marked="center"
            align="center"
          >
            התחברות
          </Typography>
          <Typography variant="body2" align="center">
            <Link title="Did not registered yet?" to={ROUTES.LOGIN} />
          </Typography>
          <Form
            onSubmit={onSubmit}
            onReset={handleReset}
            onFormChange={validateForm}
          >
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
