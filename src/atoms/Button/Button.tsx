import React from 'react';
import { Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { StyledButton, DisabledButton } from './Button.style';
import { useTheme } from '@mui/material';

interface ButtonProps {
  title: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: 'contained' | 'outlined';
  backgroundColor?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  buttonFontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  onClick,
  variant,
  backgroundColor,
  style,
  type,
  disabled = false,
  loading = false,
  buttonFontSize,
  fontWeight,
  letterSpacing,
}: ButtonProps) => {
  const theme: string | number | any = useTheme();
  return (
    <>
      {disabled ? (
        <DisabledButton style={{ ...style }} disabled>
          <Typography
            style={{
              fontSize: buttonFontSize ?? theme.typography.body2,
              fontWeight: fontWeight,
            }}
          >
            {title}
          </Typography>
        </DisabledButton>
      ) : (
        <StyledButton
          loading={loading}
          disabled={disabled}
          variant={variant}
          onClick={onClick}
          type={type}
          backgroundColor={backgroundColor}
          color={color}
          style={{ ...style }}
        >
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <Typography
              style={{
                fontSize: buttonFontSize ?? theme.typography.body2,
                fontWeight: fontWeight || 'normal',
                letterSpacing: letterSpacing || 'normal',
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
