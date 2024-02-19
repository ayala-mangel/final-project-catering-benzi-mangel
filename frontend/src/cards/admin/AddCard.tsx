import React, { useState } from "react";
import CardInterface from "../interfaces/CardInterface";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { string } from "joi";
import ImageInterface from "../interfaces/ImageInterface";

type Props = {
  onAddCard: (newCard: any) => void;
  card?: CardInterface;
};

const AddCard: React.FC<Props> = ({ onAddCard, card }) => {
  const [formData, setFormData] = useState<CardInterface>(
    card || {
      _id: "",
      title: "",
      description: "",
      price: 0,
      image: null,
    }
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        image: selectedFile,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const cardData = new FormData();
      cardData.append("title", formData.title);
      cardData.append("description", formData.description);
      cardData.append("price", formData.price.toString());
      if (formData.image !== null) {
        cardData.append("image", formData.image as File);
      }

      const response = await axios.post(
        "http://localhost:4000/cards",
        cardData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onAddCard(response.data); // Assuming the server responds with the newly added card
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          multiline
          required
        />
        <TextField
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          type="number"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Card
        </Button>
      </form>
    </Box>
  );
};

export default AddCard;
