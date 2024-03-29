import Box from "@mui/material/Box";
import NavItem from "../../components/NavItem";
import ROUTES from "../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem label="הירשם" to={ROUTES.SIGNUP} />
      <NavItem label="התחבר" to={ROUTES.LOGIN} />
    </Box>
  );
};

export default NotLogged;
