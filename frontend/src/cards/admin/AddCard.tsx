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

  const schema: PartialSchemaMap<any> = {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  };

  const { handleAddCard } = useCards();

  const { value, ...rest } = useForm(initialCardForm, schema, handleAddCard);

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        image: selectedFile,
      }));
    }
  };

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
          <Typography
            variant="h3"
            gutterBottom
            // marked="center"
            align="center"
          >
            הוסף מנה
          </Typography>
          <Form
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
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              //required
            />
            {/* <Button type="submit" variant="contained" color="primary">
              Add Card
            </Button> */}
          </Form>
        </Paper>
      </Box>
    </Container>
  );
};

export default AddCard;
