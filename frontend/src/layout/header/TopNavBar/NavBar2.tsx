import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import SearchBar from "./SearchBar";
import { Toolbar } from "@mui/material";
import LeftNavBar2 from "./LeftNavBar2";
import { ThemeMenuProvider } from "../menu/ThemeMenuProvider";

export const NavBar2 = () => {
  return (
    <ThemeMenuProvider>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255,0.4)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              alignItems: "center",
            }}
          >
            <LeftNavBar />
            <RightNavBar />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeMenuProvider>
  );
};
