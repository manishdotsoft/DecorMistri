import React from 'react';
import { styled } from '@mui/material';
import { theme as customTheme } from '../../thems/primitives/theme';

const theme: any = customTheme;

interface StyledButtonProps {
  loading?: boolean;
  backgroundColor?: string;
  color?: string;
  variant?: 'contained' | 'outlined';
}

const StyledButton = styled('button')<StyledButtonProps>(
  ({ backgroundColor, color, variant, loading }) => ({
    width: 240,
    height: 40,
    backgroundColor:
      variant === 'outlined'
        ? 'transparent'
        : backgroundColor || theme.palette.primary.main,
    color:
      variant === 'outlined'
        ? color || theme.palette.primary.main
        : theme.palette.white.main,
    border:
      variant === 'outlined'
        ? `1px solid ${color || theme.palette.primary.main}`
        : 'none',
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: loading ? 'default' : 'pointer',
    opacity: loading ? 0.5 : 1,

    '&:disabled': {
      backgroundColor:
        variant === 'outlined' ? 'transparent' : theme.palette.grey[400],
      color: theme.palette.common.white,
      border: 'none',
    },
  })
);

const DisabledButton = styled('button')({
  width: 240,
  height: 40,
  backgroundColor: theme.palette.grey[400],
  color: theme.palette.white.main,
  borderRadius: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'not-allowed',
  opacity: 0.5,
});

export { StyledButton, DisabledButton };
