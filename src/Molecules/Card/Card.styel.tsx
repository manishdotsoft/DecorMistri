import { Box, styled, Typography } from '@mui/material';
import { theme } from './../../thems/primitives/theme';
import typeset from '../../thems/primitives/typeset';
import palette from '../../thems/primitives/palette';

interface SuccessStatusProps {
  isStarted: boolean;
}

export const Button = styled('button')({
  height: '20px',
  width: '20px',
});

export const CardContainer = styled('div')({
  marginBottom: '30px',
  boxShadow: `0 0 10px 1px ${theme.palette.grey[400]}`,
  minWidth: '240px',
  backgroundColor: palette.decor.Lite,
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease',
  opacity: 0,
  animation: 'fadeIn 0.5s ease forwards',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 4px 15px 2px ${theme.palette.grey[500]}`,
  },

  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

export const HeadingTitle = styled(Typography)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: typeset.h6.fontSize,
  fontWeight: 'bold',
  color: palette.text.primary,
  background: `linear-gradient(90deg, ${palette.decor.main}, ${palette.decor.dark}, ${palette.error.main})`,
  backgroundSize: '300% 100%',
  animation: 'gradientAnimation 3s infinite linear',
  padding: '5px 10px',
  marginBottom: '10px',
  borderRadius: '6px',
  width: '100%',
  boxSizing: 'border-box',

  '@keyframes gradientAnimation': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
});
export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
});

export const TiteleStatus = styled(Typography)({
  marginTop: '25px',
  marginBottom: '5px',
  color: theme.palette.error.main,
  fontSize: typeset.body1.fontSize,
});

export const SuccessStatus = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isStarted',
})<SuccessStatusProps>(({ theme, isStarted }) => ({
  marginTop: '5px',
  marginBottom: '5px',
  color: isStarted ? theme.palette.primary.main : theme.palette.error.main,
  fontSize: typeset.body2.fontSize,
}));
