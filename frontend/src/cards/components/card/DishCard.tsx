import { Box, Card, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ColorPreview from "../../design/ColorPreview";
import CardInterface from "../../interfaces/CardInterface";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import ImageInterface from "../../interfaces/ImageInterface";

type Props = {
  card: CardInterface;
  onDelete: (x: string) => void;
};

const DishCard: React.FC<Props> = ({ card, onDelete }) => {
  const navigate = useNavigate();

  const getImageAlt = (
    image: File | ImageInterface | null | undefined
  ): string => {
    if (image instanceof File) {
      return "Alt Text for File";
    } else if (image) {
      return image.alt;
    } else {
      return "Default Alt Text";
    }
  };

  const getImageUrl = (
    image: File | ImageInterface | null | undefined
  ): string => {
    if (image instanceof File) {
      // Handle the case for File, e.g., return a default URL or leave it empty
      return "default-placeholder-url.jpg";
    } else if (image) {
      return image.url;
    } else {
      return "Default Image URL";
    }
  };

  const renderImg = (
    <Box
      component="img"
      alt={getImageAlt(card.image)}
      src={getImageUrl(card.image)}
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
    <Card
      sx={{
        borderRadius: "16px",
        bgcolor: "rgb(255, 255, 255)",
        boxShadow:
          "rgba(145, 158, 171, 0.08) 0px 2px 1px -1px rgba(0,0,0,0), 0px 1px 1px 0px rgba(0,0,0,0), 0px 1px 3px 0px rgba(0,0,0,0)",
      }}
      onClick={() => navigate(`${ROUTES.DISH_DETAILS}/${card._id}`)}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {card.title}
        </Link>
        <Typography variant="subtitle1">{card.description}</Typography>
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
                // textDecoration: "line-through",
              }}
            >
              price:{" "}
            </Typography>
            {card.price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DishCard;
