import axios from "axios";
import { LoginType, SignupType } from "../pages/signup/userTypes";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const login = async (user: LoginType) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const signup = async (user: SignupType) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/signup`, user);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
