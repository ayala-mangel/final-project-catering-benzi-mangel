import { SetStateAction, useEffect, useState } from "react";

import { Container, Stack, Typography } from "@mui/material";
import CardsFeedback from "../cards/components/CardsFeedback";
import { useCards } from "../cards/hooks/useCards";

import { ProductSort } from "../cards/components/filters/ProductSort";
import { ProductFilters } from "../cards/components/filters/ProductFilters";

type OpenValue = {
  openFilter: boolean;
  setOpenFilter: React.Dispatch<SetStateAction<boolean>>;
};

const CardsPage = () => {
  const { cards, error, isLoading, handleGetCards } = useCards();
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>
      <CardsFeedback isLoading={isLoading} error={error} cards={cards} />
    </Container>
  );
};

export default CardsPage;
