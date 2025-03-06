import { Box, styled, Typography } from '@mui/material';

interface SuccessStatusProps {
  isStarted: boolean;
}

export const Button = styled('button')({
  height: '20px',
  width: '20px',
});

export const CardContainer = styled('div')(({ theme }) => ({
  marginBottom: '30px',
  boxShadow: `0 0 10px 1px ${theme.palette.grey[400]}`,
  minWidth: '240px',
  backgroundColor: theme.palette.decor.light,
  borderRadius: '8px',
}));

export const HeadingTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: theme.typography.h6.fontSize,
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  backgroundSize: '300% 100%',
  padding: '5px 10px',
  marginBottom: '10px',
  borderRadius: '6px',
  width: '100%',
  boxSizing: 'border-box',
}));
export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
});

export const TiteleStatus = styled(Typography)(({ theme }) => ({
  marginTop: '25px',
  marginBottom: '5px',
  color: theme.palette.error.main,
  fontSize: theme.typography.body1.fontSize,
}));

export const SuccessStatus = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isStarted',
})<SuccessStatusProps>(({ theme, isStarted }) => ({
  marginTop: '5px',
  marginBottom: '5px',
  color: isStarted ? theme.palette.primary.main : theme.palette.error.main,
  fontSize: theme.typography.body2.fontSize,
}));

export const ButtonWrapper = styled(Box)({});
