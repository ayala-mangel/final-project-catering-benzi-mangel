import { useCallback, useMemo, useState } from "react";
import CardInterface from "../interfaces/CardInterface";
import { addCard, changeLikeStatus, getCard, getCards } from "./cardApi";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../App";

type ErrorType = null | string;
type CardsType = null | CardInterface[];
export type CardType =
  | CardInterface
  | {
      _id: string; // Updated to be non-empty string
      title: string;
      description: string;
      price: number;
      image: null;
    }
  | null;

export const useCards = () => {
  const { user } = useUser();
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
      console.log("User:", user);
      if (!user || !user.isAdmin) {
        console.log("User does not have permission to add cards");
        // Display an error or return early if the user doesn't have permission
        return;
      }
      setLoading(true);
      if (!card || !card._id) {
        console.error("Invalid card object or missing _id property:", card);
        throw new Error("Invalid card object or missing _id property");
      }
      const cardData = await addCard(card);
      if (cardData) {
        requestStatus(false, null, null, cardData);
        navigate(ROUTES.DISH);
      } else {
        requestStatus(
          false,
          "An error occurred while adding the card.",
          null,
          null
        );
      }
    } catch (error) {
      console.error("Error adding card:", error);
      if (typeof error === "string") {
        requestStatus(false, error, null, null);
      } else {
        // Handle other types of errors, log them, or display a generic error message.
        requestStatus(
          false,
          "An error occurred while adding the card.",
          null,
          null
        );
      }
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
