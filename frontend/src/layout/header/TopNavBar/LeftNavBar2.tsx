import React, { MouseEvent, useState } from "react";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import LogoIcon from "./LogoIcon";
import NavItem from "../../components/NavItem";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../App";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  alpha,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    //marginTop: theme.spacing(1),
    // minWidth: 180,
    color: theme.palette.mode === "light" ? "#BF1E2E" : "white",
  },
}));

const LeftNavBar2 = () => {
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <NavItem to={ROUTES.ABOUT} label="אודות" />
        <NavItem to={ROUTES.GALLERY} label="גלריה" />
        <NavItem to={ROUTES.COMMENT} label="המלצות" />
        <NavItem to={ROUTES.CONTACT} label="צור קשר" />
        <Button
          // id="demo-customized-button"
          //   aria-controls={open ? "demo-customized-menu" : undefined}
          // aria-haspopup="true"
          //  aria-expanded={open ? "true" : undefined}
          // variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ color: "black" }}
        >
          תפריטים
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              navigate(`${ROUTES.MENU.MANGAL}`);
            }}
            disableRipple
          >
            אירוע מנגל
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            onClick={() => {
              navigate(`${ROUTES.MENU.CHEF}`);
            }}
            disableRipple
          >
            מנות שף
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            onClick={() => {
              navigate(`${ROUTES.MENU.SHUSI}`);
            }}
            disableRipple
          >
            סושי
          </MenuItem>
        </StyledMenu>
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

export default LeftNavBar2;
