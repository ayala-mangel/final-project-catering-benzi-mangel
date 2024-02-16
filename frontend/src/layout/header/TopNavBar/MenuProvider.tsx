import React, { useState, useContext, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Menu from "./Menu";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const MenuContext = React.createContext<null | Function>(null);

export const MenuProvider: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));

  const [isOpen, setOpen] = useState(false);
  const [anchorEL, setAnchor] = useState<null | HTMLElement>(null);
  const anchorRef = useRef(null!);

  useEffect(() => {
    setAnchor(anchorRef.current);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [screenSize]);

  return (
    <>
      <MenuContext.Provider value={setOpen}>{children}</MenuContext.Provider>

      <Box
        ref={anchorRef}
        component="span"
        position="fixed"
        top="70px"
        right="20px"
      ></Box>
      {anchorEL && (
        <Menu
          anchorEl={anchorEL}
          isOpen={!!isOpen}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};
