import { Box, Button, Card, Link, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ColorPreview from "../../design/ColorPreview";
import CardInterface from "../../interfaces/CardInterface";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import axios from "axios";

type Props = {
  card: CardInterface;
  onDelete: (x: string) => void;
};

const DishCard: React.FC<Props> = ({ card, onDelete }) => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [uploadedFilePath, setUploadedFilePath] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploadStatus("loading");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:4000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadStatus("success");
      setUploadedFilePath(response.data.filePath);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("error");
    }
  };

  const renderImg = (
    <Box
      component="img"
      alt={card.image.alt}
      src={uploadedFilePath || card.image.url}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  return (
    <Card
      sx={{
        borderRadius: "16px",
        bgcolor: "rgb(255, 255, 255)",
        boxShadow:
          "rgba(145, 158, 171, 0.08) 0px 2px 1px -1px rgba(0,0,0,0), 0px 1px 1px 0px rgba(0,0,0,0), 0px 1px 3px 0px rgba(0,0,0,0)",
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link
          color="inherit"
          underline="hover"
          variant="subtitle2"
          onClick={() => navigate(`${ROUTES.DISH_DETAILS}/${card._id}`)}
          noWrap
        >
          {card.title}
        </Link>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }} // Hide the input but trigger it when the button is clicked
          id={`upload-input-${card._id}`}
        />
        <label htmlFor={`upload-input-${card._id}`}>
          <Button variant="outlined" color="primary" component="span">
            Upload Image
          </Button>
        </label>
        <Button
          variant="outlined"
          color="error"
          onClick={() => onDelete(card._id)}
        >
          Delete
        </Button>
        <Typography variant="subtitle1">{card.description}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <ColorPreview colors={product.colors} /> */}
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
                // textDecoration: "line-through",
              }}
            >
              price:{" "}
            </Typography>
            {card.price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DishCard;
