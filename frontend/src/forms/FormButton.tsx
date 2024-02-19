import React, { ElementType, FC, ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

type Props = {
  variant?: "contained" | "outlined" | "text";
  component?: ElementType<any>;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  node: ReactNode;
};

const FormButton: FC<Props> & ButtonProps = ({
  variant = "contained",
  component = "button",
  node,
  onClick,
  disabled = false,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <Button
      variant={variant}
      component={component}
      onClick={handleClick}
      disabled={disabled}
      fullWidth
      type="submit"
      sx={{ bgcolor: "rgba(191, 30, 46, 1)" }}
    >
      {node}
    </Button>
  );
};

export default React.memo(FormButton);
