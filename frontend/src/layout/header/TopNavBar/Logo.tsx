import React from "react";
import Typography from "@mui/material/Typography";
/* import NavBarLink from "../../../components/NavBarLink"; */
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Typography
      id="logo"
      component="a"
      variant="h4"
      onClick={() => {
        navigate(`${ROUTES.ROOT}`);
      }}
      sx={{
        display: { xs: "none", md: "inline-flex" },
        marginRight: 2,
        fontFamily: "fantasy",
      }}
    >
      Benzi
    </Typography>
  );
};

export default Logo;
