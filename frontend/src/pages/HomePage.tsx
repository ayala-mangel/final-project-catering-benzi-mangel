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
  const video = "https://www.kapwing.com/videos/65d2915170577fe8f672efbb";
  return (
    <Container>
      <Box sx={{ gap: 2 }}>
        {/*  <Container> */}
        <Card>
          <CardMedia
            component="img"
            image="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg"
            sx={{ height: 700, aspectRatio: "16/9", objectFit: "cover" }}
          >
            {/* <video
            autoPlay
            loop
            muted
            poster="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg"
            src={video} 
          /> */}
            {/*   <source src={video} type="video/mp4" /> */}
          </CardMedia>
          {/* <CardContent>
          <Typography
            
            fontWeight="lg"
            
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent> */}
        </Card>
        <CardsPage />

        <Questions />
        {/* </Container> */}
      </Box>
    </Container>
  );
}

export default HomePage;
