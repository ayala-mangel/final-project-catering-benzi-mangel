import React from "react";
import Grid from "@mui/material/Grid";
import CardDish from "./card/CardDish";
import CardInterface from "../interfaces/CardInterface";

type Props = {
  cards: CardInterface[];
};

const Cards: React.FC<Props> = ({ cards }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
          <CardDish />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
