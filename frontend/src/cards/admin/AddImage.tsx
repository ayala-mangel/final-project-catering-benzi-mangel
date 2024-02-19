import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import CardInterface from "../interfaces/CardInterface";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";

type Props = {
  card: CardInterface;
};

const AddImage: React.FC<Props> = ({ card }) => {
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
  return (
    <Box>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the input but trigger it when the button is clicked
        id={`upload-input-${card._id}`}
      />
      <label htmlFor={`upload-input-${card._id}`}>
        <Button variant="outlined" color="primary" component="span">
          <UploadRoundedIcon />
          Upload Image
        </Button>
      </label>
    </Box>
  );
};

export default AddImage;
