import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/header/Header";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material";
import ThemeProvider from "./design/ThemeProvider";

import SignupPage from "./users/pages/signup/SignupPage";
import { TokenType } from "./users/pages/signup/userTypes";
import { MenuProvider } from "./layout/header/TopNavBar/MenuProvider";
//import CardsPage from "./pages/CardsPage";

type UserContextValue = {
  user: null | TokenType;
  setUser: (value: SetStateAction<null | TokenType>) => void;
  token: null | string;
  setToken: (value: SetStateAction<null | string>) => void;
  /* roleType?: number;
  setRoleType?: React.Dispatch<SetStateAction<number>>; */
};
type SearchWordValue = {
  searchWord: string;
  setSearchWord: React.Dispatch<SetStateAction<string>>;
  /* roleType?: number;
  setRoleType?: React.Dispatch<SetStateAction<number>>; */
};

/* type TokenUser = {
  _id: string;
  isClient: boolean;
  isAdmin: boolean;
}; */

/* type ContextUser = {
  id: string;
  fullName: {
    firstName: string;
    lastName?: string;
  };
  email: string;
  phone: number;
  password: string;
  imgUrl?: {
    url: string;
    alt: string;
  };
}; */

const UserContext = createContext<null | UserContextValue>(null);

/* export const GeneralContext = createContext<SearchWordValue>({
  searchWord: "",
  setSearchWord: () => {},
}); */

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

function App() {
  const [user, setUser] = useState<null | TokenType>(null);
  const [token, setToken] = useState<null | string>(null);
  const [searchWord, setSearchWord] = useState("");
  /* const [roleType, setRoleType] = useState<number>(RoleTypes.none); */

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <UserContext.Provider
            value={{
              user,
              setUser,
              token,
              setToken,
              /* searchWord,
        setSearchWord, */
              /* roleType,
        setRoleType, */
            }}
          >
            <MenuProvider>
              <Header />

              <Router />
            </MenuProvider>
          </UserContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
