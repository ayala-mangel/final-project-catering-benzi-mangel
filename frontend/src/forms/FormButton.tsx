import React, { ElementType, FC, ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

type Props = {
  variant?: "contained" | "outlined" | "text";
  component?: ElementType<any>;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(e);
    navigate(`${ROUTES.LOGIN}`);
  };

  const navigate = useNavigate();

  return (
    <Button
      variant={variant}
      component={component}
      onClick={handleClick}
      // disabled={disabled}
      fullWidth
      type="submit"
      sx={{ bgcolor: "rgba(191, 30, 46, 1)" }}
    >
      {node}
    </Button>
  );
};

export default React.memo(FormButton);
