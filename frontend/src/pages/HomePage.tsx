import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { NavBar2 } from "../layout/header/TopNavBar/NavBar2";
import Questions from "../components/Questions";

import CardInterface from "../cards/interfaces/CardInterface";
import CardsPage from "./CardsPage";

type Props = {
  cards: CardInterface[];
};

function HomePage() {
  const video = "https://assets.codepen.io/6093409/river.mp4";
  return (
    <Box sx={{ gap: 2 }}>
      {/*  <Container> */}
      <Card>
        <CardMedia>
          <video
            autoPlay
            loop
            muted
            poster="https://onedrive.live.com/embed?resid=E8F337FA0BC6A87B%21339&authkey=!ADDSidwMwiVc2Eo"
            src={video}
          />
          {/*   <source src={video} type="video/mp4" /> */}
        </CardMedia>
        <CardContent>
          <Typography
            //level="body-lg"
            fontWeight="lg"
            // textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      <CardsPage />

      <Questions />
      {/* </Container> */}
    </Box>
  );
}

export default HomePage;
