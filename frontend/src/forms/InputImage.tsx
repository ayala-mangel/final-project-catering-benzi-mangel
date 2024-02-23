import { Button, Grid, styled } from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

type Props = {
  variant?: "contained";
  name: string;
  type: string;
  //data: Record<string, unknown>;
  required?: boolean;
  error?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const VisuallyHiddenInput = styled("input")({
  //clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  // height: 1,
  //overflow: "hidden",
  // position: "absolute",
  //bottom: 0,
  //left: 0,
  //whiteSpace: "nowrap",
  width: 1,
});

const InputImage: FC<Props> = ({ onInputChange }) => {
  return (
    <Grid item>
      <Button
        sx={{ color: "darkred", bgcolor: "white" }}
        component="label"
        //role={undefined}
        variant="contained"
        // tabIndex={-1}
        //startIcon={<CloudUploadIcon />}
      >
        העלה תמונה
        <VisuallyHiddenInput
          type="file"
          name="image"
          onChange={onInputChange}
          accept="image/*"
        />
      </Button>
      {/*   <input
        variant={variant}
        type={type}
        accept="image/*"
        onChange={onInputChange}
        name={name}
        //required
      /> */}
    </Grid>
  );
};

export default React.memo(InputImage);
