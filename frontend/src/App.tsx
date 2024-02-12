import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/header/Header";
import Router from "./routes/Router";

type UserContextValue = {
  user?: null | TokenUser;
  setUser?: React.Dispatch<SetStateAction<TokenUser | undefined>>;
  /* roleType?: number;
  setRoleType?: React.Dispatch<SetStateAction<number>>; */
};
type SearchWordValue = {
  searchWord: string;
  setSearchWord: React.Dispatch<SetStateAction<string>>;
  /* roleType?: number;
  setRoleType?: React.Dispatch<SetStateAction<number>>; */
};

type TokenUser = {
  id: string;
  isClient: boolean;
  isAdmin: boolean;
};

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
  const [user, setUser] = useState<TokenUser>();
  const [searchWord, setSearchWord] = useState("");
  /* const [roleType, setRoleType] = useState<number>(RoleTypes.none); */

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        /* searchWord,
        setSearchWord, */
        /* roleType,
        setRoleType, */
      }}
    >
      <Header />
      <Router />
    </UserContext.Provider>
  );
}

export default App;
