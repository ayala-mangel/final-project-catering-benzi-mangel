import React from "react";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import LogoIcon from "./LogoIcon";
import NavItem from "../../components/NavItem";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../App";

const LeftNavBar = () => {
  const { user } = useUser();

  return (
    <Box sx={{ backgroundColor: "BF1E2E" }}>
      <LogoIcon />
      <Logo />

      <Box
        sx={{
          backgroundColor: "BF1E2E",
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <NavItem to={ROUTES.ABOUT} label="אודות" />
        <NavItem to={ROUTES.GALLERY} label="גלריה" />
        <NavItem to={ROUTES.COMMENT} label="המלצות" />
        <NavItem to={ROUTES.CONTACT} label="צור קשר" />
        <NavItem to={ROUTES.MENU.MANGAL} label="תפריטים" />
        {user && <NavItem to={ROUTES.CART} label="עגלה" />}
        {user && user.isClient && (
          <NavItem to={ROUTES.ADD_COMMENT} label="הוסף המלצה" />
        )}

        {user && user.isAdmin && (
          <NavItem to={ROUTES.SANDBOX} label="משתמשים" />
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
