import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import SearchBar from "./SearchBar";
import { MenuProvider } from "./MenuProvider";
import Container from "@mui/material/Container";

export const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky" style={{ backgroundColor: "darkred" }}>
        <Container>
          <Box
            sx={{
              backgroundColor: "BF1E2E",
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              alignItems: "center",
            }}
          >
            <LeftNavBar />

            <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <SearchBar />
            </Box>

            <RightNavBar />
          </Box>
        </Container>
      </AppBar>
    </MenuProvider>
  );
};
