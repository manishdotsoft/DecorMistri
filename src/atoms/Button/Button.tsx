import React from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { StyledButton, DisabledButton } from './Button.style';

interface ButtonProps {
  title: string;
  color: string;
  logo?: string;
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
  logo,
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
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
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
          data-loading={loading ? 'true' : undefined}
          disabled={disabled || loading}
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
            <Box
              display="flex"
              gap="8px"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              {logo && (
                <img src={logo} alt="button logo" style={{ height: '25px' }} />
              )}
              <Typography
                style={{
                  fontSize: buttonFontSize ?? theme.typography.body2.fontSize,
                  fontWeight: fontWeight || 'normal',
                  letterSpacing: letterSpacing || 'normal',
                }}
              >
                {title}
              </Typography>
            </Box>
          )}
        </StyledButton>
      )}
    </Box>
  );
};

export default Button;
