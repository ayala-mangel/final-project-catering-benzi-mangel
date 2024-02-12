import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
/* import NavBarLink from "../../../components/NavBarLink"; */
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";

const LogoIcon = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => {
        navigate(`${ROUTES.ROOT}`);
      }}
      sx={{ display: { xs: "inline-flex", md: "none" } }}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <Avatar alt="Business card icon" src="/assets/images/business-card.png" />
    </IconButton>
  );
};

export default LogoIcon;
