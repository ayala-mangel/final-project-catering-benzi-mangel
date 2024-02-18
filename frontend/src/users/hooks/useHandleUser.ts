import { useCallback, useMemo, useState } from "react";
import { useUser } from "../../App";
import { useNavigate } from "react-router-dom";
import { LoginType, SignupType, TokenType } from "../pages/signup/userTypes";
import { login, signup } from "../api/userApi";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../api/localStorage";
import ROUTES from "../../routes/routesModel";

type ErrorType = null | string;

const useHandleUser = () => {
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

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, []);

  const value = useMemo(() => {
    return { isLoading, error, user };
  }, [isLoading, error, user]);

  return {
    value,
    handleLogin,
    handleSignup,
    handleLogout,
  };
};

export default useHandleUser;
