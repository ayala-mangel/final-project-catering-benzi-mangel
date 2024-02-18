import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import CardInterface from "../interfaces/CardInterface";
import { Container } from "@mui/material";
import DishCard from "./card/DishCard";

type Props = {
  cards: CardInterface[];
};

const Cards: React.FC<Props> = ({ cards }) => {
  const handleDelete = (id: string) =>
    console.log(`You clicked card no: ${id}`);
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <DishCard onDelete={handleDelete} card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
