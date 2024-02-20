import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "./MenuProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, BadgeProps, styled } from "@mui/material";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Logged = () => {
  const setOpen = useMenu();

  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
        <Avatar alt="Bird" src="/assets/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
