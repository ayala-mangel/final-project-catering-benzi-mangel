import React, { useState } from "react";
import CardInterface from "../interfaces/CardInterface";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Joi, { PartialSchemaMap, string } from "joi";
import ImageInterface from "../interfaces/ImageInterface";
import Form from "../../forms/Form";
import Input from "../../forms/Input";
import useForm from "../../forms/useForm";
import { initialCardForm } from "../../users/pages/schema";
import { useCards } from "../hooks/useCards";
import InputImage from "../../forms/InputImage";
import { useUser } from "../../App";

type Props = {
  onAddCard: (newCard: any) => void;
  card?: CardInterface;
};

const AddCard: React.FC<Props> = ({ onAddCard, card }) => {
  const { user } = useUser();

  const schema: PartialSchemaMap<any> = {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  };

  const { handleAddCard } = useCards();

  const { value, ...rest } = useForm(initialCardForm, schema, handleAddCard);

  const { data, errors } = value;
  const {
    handleInputChange,
    handleReset,
    onSubmit,
    validateForm,
    handleImageChange,
  } = rest;

  if (!user || !user.isAdmin) {
    return (
      <div>
        <Typography variant="h5">
          You do not have permission to add cards.
        </Typography>
      </div>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 7, mb: 12 }}>
        <Paper
          sx={{
            py: { xs: 4, md: 8 },
            px: { xs: 3, md: 6 },
            bgcolor: "#fff5f8",
          }}
        >
          <Form
            title="הוסף מנה"
            onSubmit={onSubmit}
            onReset={handleReset}
            onFormChange={validateForm}
          >
            <Input
              label="Title"
              name="title"
              data={data}
              error={errors.title}
              //value={formData.title}
              onInputChange={handleInputChange}
              // required
            />
            <Input
              label="Description"
              name="description"
              data={data}
              // value={formData.description}
              error={errors.description}
              onInputChange={handleInputChange}
              // multiline
              //required
            />
            <Input
              label="Price"
              name="price"
              data={data}
              // data={formData.price}
              error={errors.price}
              onInputChange={handleInputChange}
              //type="number"
              required
            />

            <InputImage
              name="image"
              type="file"
              onInputChange={handleImageChange}
            />
          </Form>
        </Paper>
      </Box>
    </Container>
  );
};

export default AddCard;
