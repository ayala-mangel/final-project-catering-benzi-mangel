import { useCallback, useMemo, useState } from "react";
import CardInterface from "../interfaces/CardInterface";
import { addCard, changeLikeStatus, getCard, getCards } from "./cardApi";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

type ErrorType = null | string;
type CardsType = null | CardInterface[];
export type CardType =
  | CardInterface
  | {
      _id: "";
      title: "";
      description: "";
      price: 0;
      image: null;
    }
  | null;

export const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [card, setCard] = useState<CardType>(null);
  const navigate = useNavigate();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card: CardType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleAddCard = async (card: CardType) => {
    try {
      setLoading(true);
      const cardData = await addCard(card);
      requestStatus(false, null, null, cardData);
      navigate(ROUTES.DISH);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards, null);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleLikeCard = async (cardId: string) => {
    try {
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
    } catch (error) {
      if (typeof error === "string")
        return requestStatus(false, error, null, null);
    }
  };

  return {
    isLoading,
    error,
    cards,
    card,
    setCards,
    handleAddCard,
    handleGetCards,
    handleGetCard,
    handleLikeCard,
  };
};
