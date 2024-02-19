import { Box, Grid, Typography } from "@mui/material";
import Joi from "joi";
import React, { CSSProperties, FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import LoopIcon from "@mui/icons-material/Loop";
import ROUTES from "../routes/routesModel";

type Props = {
  title?: string;
  onSubmit: (event: React.FormEvent) => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  to?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  spacing?: number;
  styles?: CSSProperties;
  children: ReactNode;
};

const Form: FC<Props> = ({
  title = "",
  onSubmit,
  onReset,
  onFormChange,
  to = "/",
  color = "inherit",
  spacing = 1,
  styles,
  children,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSubmit(event);
  };

  return (
    <Box
      component="form"
      color={color}
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <Typography align="center" variant="h5" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={1} my={2} direction="row" width="100">
        <FormButton
          node="Submit"
          onClick={onSubmit}
          disabled={!!onFormChange()}
          //  size="large"
        />
      </Grid>
    </Box>
  );
};

export default React.memo(Form);
