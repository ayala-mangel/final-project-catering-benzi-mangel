import React, { useState } from "react";
import axios from "axios";

const ImageUploadComponent: React.FC = () => {
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
        "http://localhost:3001/upload",
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
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploadStatus === "loading"}>
        Upload
      </button>

      {uploadStatus === "loading" && <p>Uploading...</p>}
      {uploadStatus === "success" && (
        <div>
          <p>Upload successful!</p>
          {uploadedFilePath && (
            <img
              src={`http://localhost:3000/${uploadedFilePath}`}
              alt="Uploaded"
            />
          )}
        </div>
      )}
      {uploadStatus === "error" && (
        <p>Error uploading image. Please try again.</p>
      )}
    </div>
  );
};

export default ImageUploadComponent;
