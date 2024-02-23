import axios from "axios";
import CardInterface from "../interfaces/CardInterface";
import { CardType } from "./useCards";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const getCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    // return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getCard = async (cardId: string) => {
  try {
    const { data } = await axios.get<CardInterface>(
      `${apiUrl}/cards/${cardId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const addCard = async (card: CardType) => {
  try {
    if (!card || !card._id) {
      throw new Error("Invalid card object or missing _id property");
      /* const { _id, ...cardData } = card;
      const { data } = await axios.post<CardInterface>(
        `${apiUrl}/cards`,
        cardData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return Promise.resolve(data); */
    }
    const { data } = await axios.post<CardInterface>(
      `${apiUrl}/cards/${card._id}`,
      card,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return Promise.resolve(data);
  } catch (error) {
    console.error("Error adding card:", error);
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unexpected error occurred!");
    }
    /* if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!"); */
  }
};

export const changeLikeStatus = async (cardId: string) => {
  try {
    const { data } = await axios.patch<CardInterface>(
      `${apiUrl}/cards/${cardId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
