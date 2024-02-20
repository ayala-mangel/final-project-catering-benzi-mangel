import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import ROUTES from "../../routes/routesModel";
import ContactEmergencyRoundedIcon from "@mui/icons-material/ContactEmergencyRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => navigate(ROUTES.ABOUT)}
          label="אודות"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate(ROUTES.CONTACT)}
          label="יצירת קשר"
          icon={<ContactEmergencyRoundedIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate(ROUTES.GALLERY)}
          label="גלרייה"
          icon={<CollectionsRoundedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
