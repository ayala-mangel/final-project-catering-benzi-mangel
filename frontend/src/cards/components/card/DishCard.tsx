import { Box, Card, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ColorPreview from "../../design/ColorPreview";
import CardInterface from "../../interfaces/CardInterface";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

type Props = {
  card: CardInterface;
  onDelete: (x: string) => void;
};

const DishCard: React.FC<Props> = ({ card, onDelete }) => {
  const navigate = useNavigate();
  const renderImg = (
    <Box
      component="img"
      alt={card.image.alt}
      src={card.image.url}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  return (
    <Card onClick={() => navigate(`${ROUTES.DISH_DETAILS}/${card._id}`)}>
      <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {card.title}
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <ColorPreview colors={product.colors} /> */}
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              price
            </Typography>
            {card.price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DishCard;
