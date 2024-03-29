import React, { ChangeEvent, FC } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { InputBase, InputProps, colors, styled } from "@mui/material";

type VariantType = "filled" | "outlined" | "standard";
type BreakPointsKeysType = "xs" | "sm" | "md" | "lg" | "xl";
type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  variant?: VariantType;
  type?: string;
  name: string;
  data: Record<string, unknown>;
  label: string;
  required?: boolean;
  error?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  breakPoints?: Partial<Record<BreakPointsKeysType, BreakPointValueType>>;
};

const StyleInput = styled((props: InputProps) => <InputBase />)(
  ({ theme }) => ({
    "& .MuiInputBase-inputHiddenLabel": { colors: "#25525" },
  })
);

const Input: FC<Props> = ({
  variant = "outlined",
  type = "text",
  name,
  data,
  label,
  required = true,
  error,
  onInputChange,
  breakPoints,
}) => {
  return (
    <Grid item xs={12} {...breakPoints}>
      <TextField
        sx={{ color: "white" }}
        variant={variant}
        autoFocus
        label={label}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        error={Boolean(error)}
        helperText={error}
        onChange={onInputChange}
        fullWidth
        autoComplete={label}
      />
    </Grid>
  );
};

export default React.memo(Input);
