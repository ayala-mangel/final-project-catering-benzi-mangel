import {
  Box,
  Container,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SignupType, TokenType } from "./userTypes";
import { signup } from "../../api/userApi";
import { getUser, setTokenInLocalStorage } from "../../api/localStorage";
import { useUser } from "../../../App";
import ROUTES from "../../../routes/routesModel";
import useForm from "../../../forms/useForm";
import { initialSignupForm } from "../schema";
import signupValedation from "./signupValedation";
import AppAppBar from "../../../forms/AppAppBar";
import Form from "../../../forms/Form";
import Input from "../../../forms/Input";

type ErrorType = null | string;

function SignupPage() {
  const [sent, setSent] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const { setUser, setToken, user } = useUser();
  const [error, setError] = useState<ErrorType>(null);
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

  const handleSignup = useCallback(
    async (user: SignupType) => {
      try {
        setLoading(true);
        const token = await signup(user);
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
          <Typography
            variant="h3"
            gutterBottom
            // marked="center"
            align="center"
          >
            הרשמה
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
              label="First name"
              name="firstName"
              data={data}
              error={errors.fullName}
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
}

export default SignupPage;
