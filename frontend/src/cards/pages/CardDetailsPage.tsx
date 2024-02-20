import { useParams } from "react-router-dom";
import { useCards } from "../hooks/useCards";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Container } from "@mui/material";
import DishCard from "../components/card/DishCard";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const { card, error, isLoading, handleGetCard } = useCards();

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !card) return <p>No card to display...</p>;

  if (!isLoading && card)
    return (
      <Container>
        <div>
          <DishCard card={card} onDelete={console.log} />
        </div>
      </Container>
    );
  return null;
};

export default CardDetailsPage;
