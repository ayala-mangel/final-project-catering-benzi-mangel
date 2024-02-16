import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import SearchBar from "./SearchBar";
import { ThemeProvider, Toolbar } from "@mui/material";
import { ThemeMenuProvider } from "../menu/ThemeMenuProvider";

export const NavBar = () => {
  return (
    <ThemeMenuProvider>
      <AppBar
        position="static"
        sx={{
          bgcolor: "black",
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

            {/*  <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <SearchBar />
            </Box>

            <RightNavBar /> */}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeMenuProvider>
  );
};
