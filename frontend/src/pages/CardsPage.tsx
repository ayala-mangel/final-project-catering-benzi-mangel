import { useEffect } from "react";

import { Container } from "@mui/material";
import CardsFeedback from "../cards/components/CardsFeedback";
import { useCards } from "../cards/hooks/useCards";

const CardsPage = () => {
  const { cards, error, isLoading, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      <CardsFeedback isLoading={isLoading} error={error} cards={cards} />
    </Container>
  );
};

export default CardsPage;
