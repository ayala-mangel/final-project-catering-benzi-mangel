import React from "react";
import CardInterface from "../interfaces/CardInterface";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";

type Props = {
  isLoading: boolean;
  error: string | null;
  cards: CardInterface[] | null;
};

const CardsFeedback: React.FC<Props> = ({ isLoading, error, cards }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length) return <Cards cards={cards} />;
  if (cards && !cards.length)
    return (
      <Typography>
        Oops, there are no business cards in the database that match the
        parameters you entered!
      </Typography>
    );
  return null;
};

export default CardsFeedback;
