import React from "react";
import { Typography, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material";
import { StyledButton, DisabledButton } from "./Button.style";

interface ButtonProps {
  title: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "contained" | "outlined";
  backgroundColor?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  buttonFontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  onClick,
  variant,
  backgroundColor,
  style,
  disabled = false,
  loading = false,
  buttonFontSize,
  fontWeight,
  letterSpacing,
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <>
      {disabled ? (
        <DisabledButton style={{ ...style }} disabled>
          <Typography
            style={{
              fontSize: buttonFontSize ?? theme.typography.body2.fontSize,
              fontWeight: fontWeight,
            }}
          >
            {title}
          </Typography>
        </DisabledButton>
      ) : (
        <StyledButton
          data-loading={loading ? "true" : undefined} // Use a custom attribute
          disabled={disabled || loading} // Disable the button when loading
          variant={variant}
          onClick={onClick}
          backgroundColor={backgroundColor}
          color={color}
          style={{ ...style }}
        >
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <Typography
              style={{
                fontSize: buttonFontSize ?? theme.typography.body2.fontSize,
                fontWeight: fontWeight || "normal",
                letterSpacing: letterSpacing || "normal",
              }}
            >
              {title}
            </Typography>
          )}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
