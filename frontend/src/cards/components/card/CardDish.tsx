import React, { Component } from "react";
import CardInterface from "../../interfaces/CardInterface";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ROUTES from "../../../routes/routesModel";
import ImageInterface from "../../interfaces/ImageInterface";

type Props = {
  card: CardInterface;
  image: ImageInterface;
};

const CardDish = () => {
  const navigate = useNavigate();
  //const { url, alt } = image;
  return (
    <Card
      sx={{
        width: 340,
        boxShadow: "rgba(0, 0, 0, 0.6)",
        borderRadius: 2,
        backdropFilter: "blur(20px)",
        "&::before": {
          transition: "box-shadow .15s ease-in-out",
        },
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <CardActionArea onClick={() => navigate(`${ROUTES.CREATE_CARD}`)}>
        <CardMedia
          component="img"
          image="https://cdn.pixabay.com/photo/2024/02/01/10/55/heart-8545742_1280.jpg"
          alt=""
          sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
        />
      </CardActionArea>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography>jijhnj</Typography>
      </CardContent>
      <CardActions
        sx={{
          bgcolor: "background.level1",
          "& > button": { borderRadius: "2rem" },
        }}
      >
        <ButtonGroup variant="outlined" sx={{ bgcolor: "background.surface" }}>
          <Button>ollkhl</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CardDish;
